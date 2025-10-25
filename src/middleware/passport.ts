import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const JwtExpiration = '8h';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        `http://localhost:${process.env.SERVER_PORT}${process.env.BASE_PATH}/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        image: profile.photos?.[0].value,
        isAdmin: profile.id === process.env.APP_ADMIN_ID,
      };
      console.log('Authenticated user:', user.displayName);
      return done(null, user);
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Since we are not using a database, we can simply return the user id
  done(null, { id });
});

export const authenticateGoogle = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('google', { scope: ['profile'], prompt: 'select_account' })(req, res, next);
};

export const handleGoogleCallback = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('google', { failureRedirect: '/login' }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.redirect(`${process.env.FRONTEND_URL}/login`);
    // Generate JWT token with user data
    const token = jwt.sign({ ...user }, process.env.JWT_SECRET ?? '', {
      expiresIn: JwtExpiration,
    });

    res.redirect(`${process.env.FRONTEND_URL}/auth/success?token=${token}`);
  })(req, res, next);
};
