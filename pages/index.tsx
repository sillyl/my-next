import {useState} from 'react';
import {Button, Drawer} from 'antd';
import Head from "next/head";

  const Home: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div>
      <Head>
        <title>Next.js</title>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <Button type="primary" onClick={open}>Open Dialog</Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={close}
        visible={showDialog}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default Home
