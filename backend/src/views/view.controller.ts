import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class ViewController {
  @Get()
  root(@Req() req: Request, @Res() res: Response) {
    this.logout(process.env.RETURN_URL, res);
  }

  logout(host: string, res: Response) {
    const encodedUrl = encodeURIComponent(
      `${process.env.OAUTH2_PROXY_OIDC_ISSUER_URL}v2/logout?returnTo=${host}&client_id=${process.env.OAUTH2_PROXY_CLIENT_ID}`,
    );
    const urlToRedirect = `${host}/oauth2/sign_out?rd=${encodedUrl}`;
    console.log('Encoded', encodedUrl);
    console.log('Url to Redirect', urlToRedirect);
    res.redirect(urlToRedirect);
  }
}
