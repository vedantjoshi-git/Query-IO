import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Button, Avatar, Input } from "@material-ui/core";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  AssignmentIndOutlined,
  FeaturedPlayListOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  ExpandMore,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import "./css/QHeader.css";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;
  const [inputUrl, setInputUrl] = useState('');

  return (
    <div className="qHeader">
      <div className="qHeader__content">
        <div className="qHeader__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt="logo"
          />
        </div>

        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlined />
          </div>
          <div className="qHeader__icon">
            <AssignmentIndOutlined />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />{" "}
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />
          </div>
        </div>

        <div className="qHeader__input">
          <SearchIcon />

          <input type="text" placeholder="Search questions" />
        </div>

        <div className="qHeader__Rem">
          <Avatar />
        
         <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar  className="avatar" />
              <div className="modal__scope">
                <PeopleAltOutlined />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal__Field">
              <Input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type=" text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: inclue a link that gives context"
                />
                {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="displayimage"
                  />
                )}
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button  type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
          </div>
      </div>
    </div>
  );
}

export default Header;
