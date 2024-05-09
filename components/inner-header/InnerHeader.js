import InnHeader from "./inner-header.module.css";
import React, { useState } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import Link from "next/link";
import Image from "next/image";

function InnerHeader(props) {
  // for add or remove class onm click
  const handelClick = (e) => {
    Array.from(document.getElementsByClassName("forRemoveClass")).forEach(
      (el) => {
        el.classList.remove("active");
      }
    );
    e.target.parentElement.classList.add("active");
  };

  const navWrap = () => {
    document.body.classList = "";
    document.body.classList.add("navigation_open");
  };
  const closeIcon = () => {
    document.body.classList = "";
    document.body.classList.remove("navigation_open");
  };
  // const closeNavWrap=()=>{
  //     document.body.classList=''
  //     document.body.classList.remove('navigation_open')
  // }

  const fillterWrap = () => {
    document.body.classList = "";
    document.body.classList.add("fillter_open");
  };

  const Closefillter = () => {
    document.body.classList = "";
    document.body.classList.remove("fillter_open");
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <header className={InnHeader.headerTwo}>
        <Row className="justify-content-between align-items-center header_flex">
          <Col lg="4" sm="3" className="col-6" style={{ width: "350px" }}>
            <Link href="/">
              <a>
                <Image
                  width={169}
                  height={41}
                  src={"/images/innerlogo.png"}
                  alt="Logo"
                />
              </a>
            </Link>
          </Col>
          <Col lg="3" sm="6" className="d-none d-sm-block">
            <ul className={InnHeader.count_wrap}>
              <li>
                <span>Beginner</span>
                <div className={InnHeader.countIcon}>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Counter-Icon.svg"}
                    alt="Count"
                  />
                </div>
                <span className={InnHeader.count}>20K</span>
              </li>
              <li>
                <span>Business</span>
                <div className={InnHeader.countIcon}>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Counter-Icon.svg"}
                    alt="Count"
                  />
                </div>
                <span className={InnHeader.count}>505K</span>
              </li>
              <li>
                <span>Big Data</span>
                <div className={InnHeader.countIcon}>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Counter-Icon.svg"}
                    alt="Count"
                  />
                </div>
                <span className={InnHeader.count}>25M</span>
              </li>
              <li>
                <span>Custom</span>
                <div className={InnHeader.countIcon}>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Counter-Icon.svg"}
                    alt="Count"
                  />
                </div>
                <span className={InnHeader.count}>14.2B</span>
              </li>
            </ul>
          </Col>
          <Col
            lg="5"
            sm="3"
            className="col-8"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <div className={InnHeader.header_right}>
              <ul>
                <li className={InnHeader.close_icon_block}>
                  <span
                    className={InnHeader.close_icon}
                    onClick={closeIcon}
                  ></span>
                </li>
                <li>
                  <Link href="/">
                    <a className="active">
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon7.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#0" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon8.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Profile</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#0" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon9.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Plans</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#0" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon10.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Orders</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/project-list" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon11.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>
                        <a>Projects</a>
                      </span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="#0" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon3.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Help</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#0" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon2.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>LogOut</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <span className={InnHeader.toggleGroup} onClick={navWrap}>
                <span className={InnHeader.toggleIcon}></span>
              </span>
            </div>
          </Col>
        </Row>
        <div className={InnHeader.header_menu}>
          <ul>
            <li className={InnHeader.close_icon_block}>
              <span
                onClick={Closefillter}
                className={InnHeader.close_icon}
              ></span>
            </li>
            <li onClick={handelClick}>
              <Link className="forRemoveClass active" href="/project">
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon17.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  {/* <Image
                    width={40}
                    height={40}
                    src={"/images/icon17-hover.svg"}
                    alt="Icon"
                    className={InnHeader.hover_img}
                  /> */}
                  <span className={InnHeader.menu_name}>Projects</span>
                </a>
              </Link>
            </li>
            <li onClick={handelClick}>
              <Link className="forRemoveClass" href="/new-project">
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon18.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  {/* <Image
                    width={40}
                    height={40}
                    src={"/images/icon18-hover.svg"}
                    alt="Icon"
                    className={InnHeader.hover_img}
                  /> */}
                  <span className={InnHeader.menu_name}>New Project</span>
                </a>
              </Link>
            </li>
            <li>
              <Link className="forRemoveClass" href="/category">
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon19.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  {/* <Image
                    width={40}
                    height={40}
                    src={"/images/icon19-hover.svg"}
                    alt="Icon"
                    className={InnHeader.hover_img}
                  /> */}
                  <span className={InnHeader.menu_name}>Scraper</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                onClick={toggle}
                className="forRemoveClass"
                href="/new-categories"
              >
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon20.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  {/* <Image
                    width={40}
                    height={40}
                    src={"/images/icon20-hover.svg"}
                    alt="Icon"
                    className={InnHeader.hover_img}
                  /> */}
                  <span className={InnHeader.menu_name}>New Category</span>
                </a>
              </Link>
            </li>
            <li>
              <Link className="forRemoveClass" href="/Scraper">
                <a>
                  <Image
                    width={50}
                    height={50}
                    src={"/images/Scripticon2.png"}
                    alt="Icon"
                  />
                  <span className={InnHeader.menu_name}>New Script</span>
                </a>
              </Link>
            </li>
            <li>
              <Link className="forRemoveClass" href="/new-scarper">
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon21.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  {/* <Image
                    width={40}
                    height={40}
                    src={"/images/icon21-hover.svg"}
                    alt="Icon"
                    className={InnHeader.hover_img}
                  /> */}
                  <span className={InnHeader.menu_name}>New Scraper</span>
                </a>
              </Link>
            </li>
          </ul>
          <span className={InnHeader.menu_close} onClick={fillterWrap}>
            Projects/Scrapers
          </span>
        </div>
      </header>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`${InnHeader.modalWrap} ${InnHeader.header_modal}`}
      >
        <ModalHeader>
          <span className={InnHeader.modalTitle}>
            New Category - Creation Panel
          </span>
          <span className={InnHeader.closeButton} onClick={toggle}></span>
        </ModalHeader>
        <ModalBody>
          <div className={InnHeader.modalBodyContent}>
            <Form>
              <FormGroup>
                <Label>Category name:</Label>
                <Input
                  placeholder="Write your extration project name here"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label>Description:</Label>
                <Input
                  placeholder="Write a brief description of your extration project here"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label>Upload image:</Label>
                <span className={InnHeader.uploadIcon}>
                  <Input type="file" />
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Upload-Icon.svg"}
                    alt="Upload"
                  />
                </span>
              </FormGroup>
              <div className={InnHeader.btn_block}>
                <Link href="#0" onClick={toggle}>
                  CANCEL
                </Link>
                <Link href="/categories-list" className={InnHeader.style_two}>
                  SAVE
                </Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default InnerHeader;
