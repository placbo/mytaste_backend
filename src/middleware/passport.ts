import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Request, Response, NextFunction } from 'express';
import { JwtSecret } from '../utils/constants';
import jwt from 'jsonwebtoken';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: `${process.env.BASE_PATH}/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        image: profile.photos?.[0].value,
        isAdmin: profile.id === process.env.GOOGLE_CLIENT_SECRET,
      };
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
  passport.authenticate('google', { scope: ['profile'] })(req, res, next);
};

export const handleGoogleCallback = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('google', { failureRedirect: '/login' }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.redirect('/login');

    // Generate JWT token with user id, displayName, and image
    const token = jwt.sign(
      { id: user.id, displayName: user.displayName, image: user.image, isAdmin: user.isAdmin },
      JwtSecret,
      {
        expiresIn: '8h',
      }
    );

    res.redirect(`${process.env.FRONTEND_URL}/auth/success?token=${token}`);
  })(req, res, next);
};
