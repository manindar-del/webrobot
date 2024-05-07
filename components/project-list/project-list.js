import ProductListCss from "./project-list.module.css";
import React, { useState } from "react";
import InnerHeader from "../inner-header/InnerHeader";
import TopSearch from "../top-search/top-serarch";
import {
  Row,
  Col,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
// import { Tooltip } from "react-tooltip";
import Link from "next/link";
// import Img1 from "/images/img1.svg";
// import icon25 from "/images/icon25.svg";
// import icon26 from "/images/icon26.svg";
// import icon27 from "/images/icon27.svg";
// import icon28 from "/images/icon28.svg";
// import icon29 from "/images/icon29.svg";
// import icon30 from "/images/icon30.svg";
// import icon31 from "/images/icon31.svg";
// import icon32 from "/images/icon32.svg";
// import Img_1 from "/images/img-1.png";
// import uplaodIcon from "/images/Upload-Icon.svg";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import Image from "next/image";

function ProjectList({ projData }) {
  console.log(projData, "props");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const options = [
    { label: "KCOM Colourpages UK", value: 1 },
    { label: "Yellow Pages Spain", value: 2 },
    { label: "Comments on G20 Twitter", value: 3 },
    { label: "Walmart Smart TVs", value: 4 },
    { label: 'Opinions on Jesus "catholicforum.com"', value: 5 },
    { label: "Smart TVs on Amazon.it", value: 6 },
  ];
  //   useEffect(() => {
  //     ReactTooltip.rebuild();
  //   }, []);
  return (
    <>
      <InnerHeader />

      <section className={ProductListCss.project_list}>
        <Breadcrumbs />
        <TopSearch />
        <div className={ProductListCss.project_items}>
          <div className={ProductListCss.table_responsive}>
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
              <tbody>
                {projData !== null && projData?.length
                  ? projData?.map((item, index) => (
                      <tr>
                        <td>
                          <div className={ProductListCss.left_content}>
                            <div className={ProductListCss.imgBlock}></div>
                            <div className={ProductListCss.item_info}>
                              <h6>
                                <Link href="/project-bots-list">
                                  <a>{item?.name}</a>
                                </Link>
                              </h6>
                              <span className={ProductListCss.item_id}>
                                ID# {item?.id}
                              </span>
                              <p>{item?.description}</p>

                              <Link
                                href="/project-bots-list"
                                data-tip="Click here or on the title to see the list of bots and datasets"
                              >
                                <a>Project details</a>
                              </Link>
                              {/* <Tooltip /> */}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={ProductListCss.blue_btn}>
                            {item?.frequency}
                          </span>
                        </td>
                        <td>
                          <span className={ProductListCss.gray_btn}>Empty</span>
                        </td>
                        <td>
                          <span
                            className={ProductListCss.projectInfoBtn}
                            onClick={toggle}
                          >
                            <Image
                              height={50}
                              width={50}
                              data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month."
                              src={"/images/img1.svg"}
                              alt="Img"
                            />
                          </span>
                          {/* <Tooltip /> */}
                        </td>
                        <td>
                          <div className={ProductListCss.action_group}>
                            <Link href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon25.svg"}
                                  alt="icon25"
                                />
                              </a>
                            </Link>

                            <Link href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon26.svg"}
                                  alt="icon26"
                                />
                              </a>
                            </Link>

                            <Link href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon27.svg"}
                                  alt="icon27"
                                />
                              </a>
                            </Link>

                            <Link href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon28.svg"}
                                  alt="icon28"
                                />
                              </a>
                            </Link>
                            <br />
                            <span className={ProductListCss.hover_tool}>
                              <Image
                                height={50}
                                width={50}
                                src={"/images/icon29.svg"}
                                alt="icon29"
                              />
                              <div className={ProductListCss.action_option}>
                                <span data-tip="It opens the import /associate bot modal">
                                  Export project data sets
                                </span>
                                <span data-tip="It opens the 'New Scraper' tab">
                                  Export project bots/scrapers
                                </span>
                                {/* <Tooltip /> */}
                                {/* <Tooltip /> */}
                              </div>
                            </span>
                            <Link data-tip="Duplicate" href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon30.svg"}
                                  alt="icon30"
                                />
                                {/* <Tooltip /> */}
                              </a>
                            </Link>
                            <span
                              onClick={toggle1}
                              data-tip="Import bots/scrapers (without datasets)"
                            >
                              <Image
                                height={50}
                                width={50}
                                src={"/images/icon31.svg"}
                                alt="icon31"
                              />
                              {/* <Tooltip /> */}
                            </span>
                            <span className={ProductListCss.hover_tool}>
                              <Image
                                height={50}
                                width={50}
                                src={"/images/icon32.svg"}
                                alt="icon32"
                              />
                              <div className={ProductListCss.action_option}>
                                {/* <span
                            onClick={toggle2}
                            data-tip="It opens the import /associate bot modal"
                          >
                            Existing bots/scrapers
                          </span>
                          <span data-tip="It opens the 'New Scraper' tab">
                            New bots/scrapers
                          </span> */}
                                {/* <Tooltip /> */}
                                {/* <Tooltip /> */}
                              </div>
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="pagination-block">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <span data-tip="First page">&laquo;</span> Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next <span data-tip="Last page">&raquo;</span>
                </a>
              </li>
            </ul>
            {/* <Tooltip /> */}
            {/* <Tooltip /> */}
          </nav>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`${ProductListCss.modalWrap} ${ProductListCss.project_static}`}
      >
        <ModalHeader>
          <span className={ProductListCss.modalTitle}>Project Statistics</span>
          <span className={ProductListCss.closeButton} onClick={toggle}></span>
        </ModalHeader>
        <ModalBody>
          <div className={ProductListCss.modalBodyContent}>
            <div className={ProductListCss.modalBodyTop}>
              <h6>Smart TVs price comparison</h6>
              <span>ID# 0001234</span>
              <div className={ProductListCss.img_block}>
                <Image
                  height={50}
                  width={50}
                  src={"/images/img-1.png"}
                  alt="Item"
                />
              </div>
              ={50}{" "}
            </div>
            <div className={ProductListCss.modalBottomContent}>
              <Row>
                <Col lg="4" sm="6">
                  <div className={ProductListCss.card_block}>
                    <div className={ProductListCss.card_block_header}>
                      <h5>Creation date</h5>
                    </div>
                    <div className={ProductListCss.card_block_body}>
                      <span>
                        28 July, <span className="font-42">2021</span>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6">
                  <div className={ProductListCss.card_block}>
                    <div className={ProductListCss.card_block_header}>
                      <h5>Latest extraction</h5>
                    </div>
                    <div className={ProductListCss.card_block_body}>
                      <span>
                        15 October, <span className="font-42">2021</span>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6">
                  <div className={ProductListCss.card_block}>
                    <div className={ProductListCss.card_block_header}>
                      <h5>End date</h5>
                    </div>
                    <div className={ProductListCss.card_block_body}>
                      <span>
                        28 December, <span className="font-42">2021</span>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6">
                  <div className={ProductListCss.card_block}>
                    <div className={ProductListCss.card_block_header}>
                      <h5>Nr. bots/scrapers</h5>
                    </div>
                    <div className={ProductListCss.card_block_body}>
                      <span>15</span>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6">
                  <div className={ProductListCss.card_block}>
                    <div className={ProductListCss.card_block_header}>
                      <h5>Data sets created</h5>
                    </div>
                    <div className={ProductListCss.card_block_body}>
                      <span>42</span>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6">
                  <div className={ProductListCss.card_block}>
                    <div className={ProductListCss.card_block_header}>
                      <h5>
                        Records extracted <span>( current month )</span>
                      </h5>
                    </div>
                    <div className={ProductListCss.card_block_body}>
                      <span>355,890</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={modal1}
        toggle={toggle1}
        className={`${ProductListCss.modalWrap} ${ProductListCss.existing_bot}`}
      >
        <ModalHeader>
          <span className={ProductListCss.closeButton} onClick={toggle1}></span>
          <span className={ProductListCss.modalTitle}>
            Import or Associate Existing Bots/Scrapers to the
            <span>
              Extraction Project
              <span className={ProductListCss.blue_text}>
                "Smart TVs price comparison"
              </span>
            </span>
          </span>
        </ModalHeader>
        <ModalBody>
          <div className={ProductListCss.modalBodyContent}>
            <Form>
              <FormGroup>
                <Label>
                  Import extraction bots/scrapers
                  <span>Select one or more bots from your computer</span>
                </Label>
                <span className={ProductListCss.uploadIcon}>
                  <Input type="file" />
                  <Image height width={50} src={""} alt="Upload" />
                </span>
                ={50}{" "}
              </FormGroup>
              <FormGroup>
                <Label>
                  Associate an existing bot/scraper:
                  <span>Select one or ore bots from the dropdown list</span>
                </Label>
                <div className={ProductListCss.multi_select_box}>
                  <div className={ProductListCss.search_box}>
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className={ProductListCss.searchInput}>
                      <span className={ProductListCss.search_icon}>
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
                          className="svg-inline--fa fa-search fa-w-16 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            className=""
                          ></path>
                        </svg>
                      </span>
                      <Input type="text" placeholder="Search bot/scraper" />
                      <span className={ProductListCss.close_icon}>
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
                          className="svg-inline--fa fa-times-circle fa-w-16 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                            className=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <ReactMultiSelectCheckboxes options={options} />
                </div>
              </FormGroup>
              <div className={ProductListCss.btn_block}>
                <Link href="#0" onClick={toggle}>
                  <>CANCEL</>
                </Link>

                <Link
                  href="/project-bots-list"
                  className={ProductListCss.style_two}
                >
                  <>SAVE</>
                </Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={modal2}
        toggle={toggle2}
        className={`${ProductListCss.modalWrap} ${ProductListCss.existing_bot}`}
      >
        <ModalHeader>
          <span className={ProductListCss.closeButton} onClick={toggle2}></span>
          <span className={ProductListCss.modalTitle}>
            Import or Associate Existing Bots/Scrapers to the
            <span>
              Extraction Project
              <span className={ProductListCss.blue_text}>
                "Smart TVs price comparison"
              </span>
            </span>
          </span>
        </ModalHeader>
        <ModalBody>
          <div className={ProductListCss.modalBodyContent}>
            <Form>
              <FormGroup>
                <Label>
                  Import extraction bots/scrapers
                  <span>Select one or more bots from your computer</span>
                </Label>
                <span className={ProductListCss.uploadIcon}>
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
                <div className={ProductListCss.multi_select_box}>
                  <div className={ProductListCss.search_box}>
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className={ProductListCss.searchInput}>
                      <span className={ProductListCss.search_icon}>
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
                          className="svg-inline--fa fa-search fa-w-16 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            className=""
                          ></path>
                        </svg>
                      </span>
                      <Input type="text" placeholder="Search bot/scraper" />
                      <span className={ProductListCss.close_icon}>
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
                          className="svg-inline--fa fa-times-circle fa-w-16 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                            className=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <ReactMultiSelectCheckboxes options={options} />
                </div>
              </FormGroup>
              <div className={ProductListCss.btn_block}>
                <Link href="/project-bots-list">
                  <>CANCEL</>
                </Link>

                <Link
                  href="/project-bots-list"
                  className={ProductListCss.style_two}
                >
                  <>SAVE</>
                </Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
export default ProjectList;
