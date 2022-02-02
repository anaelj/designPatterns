import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Luiz', 'luiz da sulva');
  console.log('tempo de espera 2seg');
  console.log(await user.getAddresses());
  console.log('Agora vem do cache');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
