import ProjectDetailEmptyCss from "../project-detail-empty/project-detail-empty.module.css";
import React, { useState } from "react";
import InnerHeader from "../inner-header/InnerHeader";
import TopSearch from "../top-search/top-serarch";
import {
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
// import icon33 from "../images/icon33.svg";
// import icon34 from "../images/icon34.svg";
// import icon35 from "../images/icon35.svg";
// import uplaodIcon from "../images/Upload-Icon.svg";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import Image from "next/image";

function CategoriesDetailEmpty(props) {
  const [modal3, setModal3] = useState(false);
  const toggle3 = () => setModal3(!modal3);

  const [modal4, setModal4] = useState(false);
  const toggle4 = () => setModal4(!modal4);

  const options = [
    { label: "KCOM Colourpages UK", value: 1 },
    { label: "Yellow Pages Spain", value: 2 },
    { label: "Comments on G20 Twitter", value: 3 },
    { label: "Walmart Smart TVs", value: 4 },
    { label: 'Opinions on Jesus "catholicforum.com"', value: 5 },
    { label: "Smart TVs on Amazon.it", value: 6 },
  ];

  return (
    <>
      <InnerHeader />
      <section className="project-detail-empty">
        <Breadcrumbs />
        <TopSearch />
        <div className="project-items">
          <div className="table_responsive">
            <Table borderless style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name/ID/Description</th>
                  <th>Frequency</th>
                  <th>Status</th>
                  <th>Statistics</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </Table>
            <div className="project-empty-content">
              <p>
                Your extraction project is still empty! It's time to have some
                fun and add one or more bots/scrapers that will do all the hard
                work while you'll enjoy the results. You have three options.
                Choose the one the best ﬁts your needs.
              </p>
              <ul>
                <li>
                  <div className="iconBlock">
                    <Image
                      height={50}
                      width={50}
                      src={"/images/icon33.svg"}
                      alt="Icon 33"
                    />
                  </div>
                  <div className="rightContact">
                    <h6 onClick={toggle3}>Import Bots/Scrapers</h6>
                    <p>
                      Use it if you've already created one or more bots with us
                      and downloaded them on your computer.
                    </p>
                    <p>
                      Upload your bots and associate them with your extraction
                      project.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="iconBlock">
                    <Image
                      height={50}
                      width={50}
                      src={"/images/icon34.svg"}
                      alt="Icon 34"
                    />
                  </div>
                  <div className="rightContact">
                    <h6 onClick={toggle4}>ASSOCIATE EXISTING BOTS/SCRAPERS</h6>
                    <p>
                      Use it if you created one or more bots/scrapers with us,
                      saved them in your dashboard, but haven't associated them
                      with the extraction project yet.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="iconBlock">
                    <Image
                      height={50}
                      width={50}
                      src={"/images/icon35.svg"}
                      alt="Icon 35"
                    />
                  </div>
                  <div className="rightContact">
                    <h6>
                      <Link href="/new-scarper">CREATE A NEW BOT/SCRAPER</Link>
                    </h6>
                    <p>
                      Use it to created and add a brand new bot to your
                      extraction project. Use our visual designer and create
                      limitless web scraping solutions.
                    </p>
                    <p>
                      Are you a developer looking for complex and super ﬂexible
                      data extraction solutions? Use the advanced mode and even
                      the bot trainer.
                    </p>
                    <p>
                      Are you a data-driven entrepreneur, marketer or
                      researcher? Use our no-code designer with point-and-click
                      functionality and scrape without any coding skills.
                    </p>
                    <p>
                      Everyone can also ﬁnd lots of already-made templates to
                      make things simple, faster, yet easier to edit and
                      customize.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal3}
        toggle={toggle3}
        className="modalWrap existing_bot"
      >
        <ModalHeader>
          <span className="closeButton" onClick={toggle3}></span>
          <span className="modalTitle">
            Import or Associate Existing Bots/Scrapers to the
            <span>
              Extraction Project
              <span className="blue_text">"Smart TVs price comparison"</span>
            </span>
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyContent">
            <Form>
              <FormGroup>
                <Label>
                  Import extraction bots/scrapers
                  <span>Select one or more bots from your computer</span>
                </Label>
                <span className="uploadIcon">
                  <Input type="file" />
                  <Image
                    height={50}
                    width={50}
                    src={"/images/Upload-Icon.svg"}
                    alt="Upload"
                  />
                </span>
              </FormGroup>
              <FormGroup>
                <Label>
                  Associate an existing bot/scraper:
                  <span>Select one or ore bots from the dropdown list</span>
                </Label>
                <div className="multi_select_box">
                  <div className="search_box">
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className="searchInput">
                      <span className="search_icon">
                        <svg
                          width="16"
                          height="16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="svg-inline--fa fa-search fa-w-16 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            class=""
                          ></path>
                        </svg>
                      </span>
                      <Input type="text" placeholder="Search bot/scraper" />
                      <span className="close_icon">
                        <svg
                          width="16"
                          height="16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="times-circle"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                            class=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <ReactMultiSelectCheckboxes options={options} />
                </div>
              </FormGroup>
              <div className="btn_block">
                <Link href="#0">CANCEL</Link>
                <Link href="/project-bots-list" className="style_two">
                  ADD NOW
                </Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={modal4}
        toggle={toggle4}
        className="modalWrap existing_bot"
      >
        <ModalHeader>
          <span className="closeButton" onClick={toggle4}></span>
          <span className="modalTitle">
            Import or Associate Existing Bots/Scrapers to the
            <span>
              Extraction Project
              <span className="blue_text">"Smart TVs price comparison"</span>
            </span>
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyContent">
            <Form>
              <FormGroup>
                <Label>
                  Import extraction bots/scrapers
                  <span>Select one or more bots from your computer</span>
                </Label>
                <span className="uploadIcon">
                  <Input type="file" />
                  <Image
                    height={50}
                    width={50}
                    src={"/images/Upload-Icon.svg"}
                    alt="Upload"
                  />
                </span>
              </FormGroup>
              <FormGroup>
                <Label>
                  Associate an existing bot/scraper:
                  <span>Select one or ore bots from the dropdown list</span>
                </Label>
                <div className="multi_select_box">
                  <div className="search_box">
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className="searchInput">
                      <span className="search_icon">
                        <svg
                          width="16"
                          height="16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="svg-inline--fa fa-search fa-w-16 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            class=""
                          ></path>
                        </svg>
                      </span>
                      <Input type="text" placeholder="Search bot/scraper" />
                      <span className="close_icon">
                        <svg
                          width="16"
                          height="16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="times-circle"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                            class=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <ReactMultiSelectCheckboxes options={options} />
                </div>
              </FormGroup>
              <div className="btn_block">
                <Link href="/project-bots-list">CANCEL</Link>
                <Link href="/project-bots-list" className="style_two">
                  ADD NOW
                </Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
export default CategoriesDetailEmpty;
