import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Container,
  Header,
  MessageList,
  Composer,
  ComposerInput,
  ComposerButton,
} from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

const config = {
  composerPlaceholder: "What would you like to know about me?",
  botName: "My Portfolio Bot",
  botAvatar: "", //Bot Icon
  botDescription: "Hi! 👋  Welcome to my portfolio",
  email: {
    title: "ngsiuwa530@gmail.com",
    link: "mailto:ngsiuwa530@gmail.com",
  },
  phone: {
    title: "+852 67398340",
    link: "tel:+852 67398340",
  },
  website: {
    title: "https://www.linkedin.com/in/siuwang555/",
    link: "https://www.linkedin.com/in/siuwang555/",
  },
};

// Load environment variables
const clientId = import.meta.env.VITE_BOT_PRESS_CLIENT_ID;

const Chatbot = () => {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div
      style={{
        width: "40vw",
        height: "40vh",
        marginTop: "20px",
        position: "absolute",
        textAlign: "left",
        borderRadius: "10px",
      }}
    >
      <style> {style} </style>
      <WebchatProvider theme={theme} client={client} configuration={config}>
        {/* Must Add the Floating Action button and Webchat components here ⬇️ */}
        {/* <Fab onClick={toggleWebchat} />
            <div
                style={{
                    display: isWebchatOpen ? "block" : "none",
                }}
            > */}
        <Container>
          <Header />
          <MessageList />
          <Composer>
            <ComposerInput />
            <ComposerButton />
          </Composer>
        </Container>
        {/* </div> */}
      </WebchatProvider>
    </div>
  );
};

export default Chatbot;
