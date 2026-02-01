import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest } from 'next/server';

 
export default async function proxy(request: NextRequest) {
  // Use the incoming request (example)
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'tr';
 
  // Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);
 
  // Alter the response (example)
  response.headers.set('x-your-custom-locale', defaultLocale);
 
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|nl|tr)/:path*']
};
