import * as React from "react";
import cn from "classnames";

import "./chat-footer.scss";
import { SendMessage } from "../../../../../assets/icons/icons";

interface chatFooterProps {
  messageInput: string;
  messageWarning: boolean;
  typingUsers: string[];
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const ChatFooter = ({
  messageInput,
  messageWarning,
  typingUsers,
  handleChange,
  handleSubmit
}: chatFooterProps) => {
  console.log("CHAT FOOTER TYPING", typingUsers);
  return (
    <section className="chat-footer">
      <section className="chat-footer__form">
        <form
          className="chat-footer__form__form"
          onSubmit={(e: any) => handleSubmit(e)}
        >
          <article
            className={cn("chat-footer__form__form__block", {
              "chat-footer__form__form__block--warning": messageWarning
            })}
          >
            <textarea
              placeholder="Write a message.."
              onChange={(e: any) => handleChange(e)}
              value={messageInput}
            ></textarea>
            <button type="submit">
              <SendMessage />
              <span>Send</span>
            </button>
          </article>
        </form>
      </section>
      <section className="chat-footer__details">
        <p>
          {typingUsers && typingUsers.length > 2
            ? "Several people are typing..."
            : typingUsers.map((typingUser: string, index: number) => {
                let string = "";
                string += typingUser;
                if (index === 0 && typingUsers.length === 1) {
                  string += " is typing...";
                } else if (index === 0) {
                  string += " and ";
                }
                if (index === 1) {
                  string += " are typing...";
                }
                return string;
              })}
        </p>
      </section>
    </section>
  );
};

export default ChatFooter;
