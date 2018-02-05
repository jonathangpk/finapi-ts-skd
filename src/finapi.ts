export class Finapi {
  constructor(private client_secret: string, private client_id: string) {}

  getSecret(){
    return this.client_secret
  }
  getId(){
    return this.client_id;
  }
}