// import { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import passport from 'passport';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import { JwtExpiration, JwtSecret } from '../utils/constants';
//
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       callbackURL: `${process.env.BASE_PATH}/auth/google/callback`,
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log('PROFILE', profile.id);
//       const user = {
//         id: profile.id,
//         displayName: profile.displayName,
//         image: profile.photos?.[0].value,
//         isAdmin: profile.id === process.env.APP_ADMIN_ID,
//       };
//
//       return done(null, user);
//     }
//   )
// );
//
// passport.serializeUser((user: any, done) => {
//   done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//   // Since we are not using a database, we can simply return the user id
//   done(null, { id });
// });
//
// export const authenticateGoogle = (req: Request, res: Response, next: NextFunction) => {
//   passport.authenticate('google', { scope: ['profile'] })(req, res, next);
// };
//
// export const handleGoogleCallback = (req: Request, res: Response, next: NextFunction) => {
//   passport.authenticate('google', { failureRedirect: '/login' }, (err, user) => {
//     if (err) return next(err);
//     if (!user) return res.redirect('/login');
//     // Generate JWT token with user data
//     const token = jwt.sign({ ...user }, JwtSecret, {
//       expiresIn: JwtExpiration,
//     });
//
//     res.redirect(`${process.env.FRONTEND_URL}/auth/success?token=${token}`);
//   })(req, res, next);
// };
