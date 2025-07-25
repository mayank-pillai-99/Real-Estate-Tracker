import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/auth/signin',
  },
})

export const config = {
  matcher: ['/properties/:path*', '/property-details/:path*', '/favorites/:path*'],
}