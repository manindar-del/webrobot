// import "../App.css";
import TopSearchCss from "./top-search.module.css";
import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Link from "next/link";
// import ReactTooltip from "react-tooltip";
// import icon22 from "../images/icon22.svg";
// import icon23 from "../images/icon23.svg";
// import icon24 from "../images/icon24.svg";
// import icon38 from "../images/icon21-hover.svg";
// import dataSet from "../images/dataSet.png";
// import uplaodIcon from "../images/Upload-Icon.svg";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

import {
  CheckBoxSelection,
  Inject,
  MultiSelectComponent,
} from "@syncfusion/ej2-react-dropdowns";
import Image from "next/image";

function TopSearch(props) {
  const vegetableData = [
    { vegetable: "KCOM Colourpage", category: "Lead Extraction", id: "item1" },
    {
      vegetable: "Yellow Page Spain ",
      category: "Lead Extraction",
      id: "item2",
    },
    { vegetable: "Yelp.de Germany", category: "Lead Extraction", id: "item3" },
    {
      vegetable: "Welmart Smart TVs",
      category: "Product info extraction",
      id: "item4",
    },
    {
      vegetable: "Smart TVs on Amazon.it ",
      category: "Product info extraction",
      id: "item5",
    },
    {
      vegetable: "French  clinics reviews on  Google",
      category: "Customer reviews extraction",
      id: "item6",
    },
    {
      vegetable: 'Opinions on Jesuus "catholicforum.com"',
      category: "Web scraping for sentiment analysis",
      id: "item7",
    },
    { category: "Trading info and trends data extraction", id: "item8" },
  ];
  const fields = {
    groupBy: "category",
    text: "vegetable",
    value: "id",
  };

  const vegetableData1 = [
    {
      vegetable: "Linkedin UK comments on G20",
      category: "Social comments on G20",
      id: "item1",
    },
    {
      vegetable: "Q&A about G20 on Quora ",
      category: "Social comments on G20",
      id: "item2",
    },
    {
      vegetable: "Comments on G20 Twitter",
      category: "Social comments on G20",
      id: "item3",
    },
    {
      vegetable: "Welmart Smart TVs",
      category: "Smart TVs price comparison",
      id: "item4",
    },
    {
      vegetable: "Smart TVs on Amazon.it ",
      category: "Smart TVs price comparison",
      id: "item5",
    },
    {
      vegetable: "French  clinics reviews on  Google",
      category: "Customer reviews on Hospitals France",
      id: "item6",
    },
    { category: "What people think about religions worldwide", id: "item7" },
    { category: "Cryptocurrencies price and trends", id: "item8" },
  ];
  const fields1 = {
    groupBy: "category",
    text: "vegetable",
    value: "id",
  };

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const options1 = [
    { label: "Social comments on G20", value: 1 },
    { label: "Linkedin UK comments on G20", value: 2 },
    { label: "Q&A about G20 on Quora", value: 3 },
    { label: "Comments on G20 Twitter", value: 4 },
    { label: "Smart TVs price comparison", value: 5 },
    { label: "Welmart Smart TVs", value: 6 },
    { label: "Smart TVs on Amazon.it", value: 7 },
    { label: "Customer reviews on Hospitals France", value: 8 },
    { label: "French clinics reviews on Google", value: 9 },
    { label: "What people think about religions worldwide", value: 10 },
    { label: "Cryptocurrencies price and trends", value: 11 },
  ];

  const options3 = [
    { label: "KCOM Colourpages UK", value: 1 },
    { label: "Yellow Pages Spain", value: 2 },
    { label: "Comments on G20 Twitter", value: 3 },
    { label: "Walmart Smart TVs", value: 4 },
    { label: 'Opinions on Jesus "catholicforum.com"', value: 5 },
    { label: "Smart TVs on Amazon.it", value: 6 },
  ];

  const options4 = [
    { label: "Smart TVs price comparison", value: 1 },
    { label: "Social comments on G20", value: 2 },
    { label: "Customer reviews on hospitals (France)", value: 3 },
    { label: "What people think about religions worldwide", value: 4 },
    { label: 'Cryptocurrencies price and trends"', value: 5 },
    { label: "Another extraction project in your list", value: 6 },
  ];

  const options5 = [
    { label: "Lead Extraction", value: 1 },
    { label: "Customer reviews extraction", value: 2 },
    { label: "Web scraping for sentiment analysis", value: 3 },
    { label: "Trading info and trends data extraction", value: 4 },
    { label: 'Another extraction bot/scraper category"', value: 5 },
  ];

  return (
    <>
      <div className={TopSearchCss.project_search}>
        <ul>
          <li>
            <a onClick={toggle1} data-tip="Export bots in bulk (no datasets)">
              <Image
                width={40}
                height={40}
                src={"/images/icon22.svg"}
                alt="Icon22"
              />
            </a>
            {/* <ReactTooltip /> */}
          </li>
          <li>
            <a onClick={toggle2} data-tip="Import bots in bulk">
              <Image
                width={40}
                height={40}
                src={"/images/icon23.svg"}
                alt="Icon23"
              />
            </a>
            {/* <ReactTooltip /> */}
          </li>
          <li>
            <Link data-tip="Notiﬁcations &amp; announcements" href="#0">
              <a>
                <Image
                  width={40}
                  height={40}
                  src={"/images/icon24.svg"}
                  alt="Icon24"
                />
              </a>
            </Link>
            {/* <ReactTooltip /> */}
          </li>
          <li>
            <Form>
              <FormGroup>
                <span className={TopSearchCss.search_icon}>
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
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
                <span className={TopSearchCss.close_icon}>
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
              </FormGroup>
            </Form>
          </li>
        </ul>
      </div>

      <Modal
        isOpen={modal1}
        toggle={toggle1}
        className={`
          ${TopSearchCss.modalWrap}
          ${TopSearchCss.export_bots_datasets}
          ${TopSearchCss.existing_bot}
          `}
      >
        <ModalHeader>
          <span className={TopSearchCss.closeButton} onClick={toggle1}></span>
          <span className="modalTitle">
            Export Your Bots/Scrapers or Data Sets
          </span>
          <span className={TopSearchCss.sub_title}>Bulk Download</span>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyContent">
            <Form>
              <h2>
                <Image
                  width={50}
                  height={50}
                  src={"/images/icon21-hover.svg"}
                  alt=""
                />
                DATA EXTRACTION BOTS/SCRAPERS
              </h2>
              <FormGroup>
                <Label>
                  Select the bots/scrapers to export:
                  <span>
                    You can download just speciﬁc bots or all the bots within a
                    category (multiple selection allowed). *Data sets not
                    included in the export ﬁle.
                  </span>
                </Label>
                <div className={TopSearchCss.multi_select_box}>
                  <div className={TopSearchCss.search_box}>
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className={TopSearchCss.searchInput}>
                      <span className={TopSearchCss.search_icon}>
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
                      <Input
                        type="text"
                        placeholder="Search category or bot/scraper"
                      />
                      <span className={TopSearchCss.close_icon}>
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
                  <MultiSelectComponent
                    defaultMenuIsOpen="true"
                    id="mtselement"
                    popupHeight="400px"
                    fields={fields}
                    dataSource={vegetableData}
                    placeholder="Search category or bot/scraper"
                    mode="CheckBox"
                    enableGroupCheckBox="true"
                    allowFiltering="true"
                    showSelectAll="true"
                    filterBarPlaceholder="Search Vegetables"
                  >
                    <Inject services={[CheckBoxSelection]} />
                  </MultiSelectComponent>
                </div>
              </FormGroup>
              <h2>
                <Image
                  width={50}
                  height={50}
                  src={"/images/dataSet.png"}
                  alt=""
                />
                DATA SETS
              </h2>
              <FormGroup>
                <Label>
                  Select the data sets to export:
                  <span>
                    You can download all the data sets associated with a project
                    or a speciﬁc bot (multiple selection allowed).
                  </span>
                </Label>
                <div className={TopSearchCss.multi_select_box}>
                  <div className={TopSearchCss.search_box}>
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className={TopSearchCss.searchInput}>
                      <span className={TopSearchCss.search_icon}>
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
                      <Input
                        type="text"
                        placeholder="Search project or bot/scraper"
                      />
                      <span className={TopSearchCss.close_icon}>
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
                  <MultiSelectComponent
                    id="mtselement"
                    popupHeight="400px"
                    fields={fields1}
                    dataSource={vegetableData1}
                    placeholder="Search project or bot/scraper"
                    mode="CheckBox"
                    enableGroupCheckBox="true"
                    allowFiltering="true"
                    showSelectAll="true"
                    filterBarPlaceholder="Search Vegetables"
                  >
                    <Inject services={[CheckBoxSelection]} />
                  </MultiSelectComponent>
                </div>
              </FormGroup>
              <div className={TopSearchCss.btn_block}>
                <Link to="#0" onClick={toggle1}>
                  CANCEL
                </Link>
                <Link
                  to="/project-bots-list"
                  className={TopSearchCss.style_two}
                >
                  Download
                </Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={modal2}
        toggle={toggle2}
        className="modalWrap export_bots_datasets existing_bot"
      >
        <ModalHeader>
          <span className={TopSearchCss.closeButton} onClick={toggle2}></span>
          <span className="modalTitle">
            Import or Associate an Existing Bot/Scraper
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyContent">
            <Form>
              <FormGroup>
                <Label>
                  Import extraction bots/scrapers:
                  <span>Select one or more bots from your computer</span>
                </Label>
                <span className={TopSearchCss.uploadIcon}>
                  <Input type="file" />
                  <Image
                    width={50}
                    height={50}
                    src={"/images/Upload-Icon.svg"}
                    alt="Upload"
                  />
                </span>
              </FormGroup>
              <FormGroup>
                <Label>
                  Associate an existing bot/scraper:
                  <span>Multiple selection allowed</span>
                </Label>
                <div className={TopSearchCss.multi_select_box}>
                  <div className={TopSearchCss.search_box}>
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className={TopSearchCss.searchInput}>
                      <span className={TopSearchCss.search_icon}>
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
                      <span className={TopSearchCss.close_icon}>
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
                  <ReactMultiSelectCheckboxes options={options3} />
                </div>
              </FormGroup>
              <FormGroup className={TopSearchCss.simpal_check}>
                <Label>
                  Add bots/scrapers to the current extraction project
                  <Input type="checkbox" />
                </Label>
              </FormGroup>
              <FormGroup className={TopSearchCss.simpal_check}>
                <Label>
                  Add bots/scrapers to the current category
                  <Input type="checkbox" />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  Add bots to speciﬁc projects:
                  <span>Multiple selection allowed</span>
                </Label>
                <div className={TopSearchCss.multi_select_box}>
                  <div className={TopSearchCss.search_box}>
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className={TopSearchCss.searchInput}>
                      <span className={TopSearchCss.search_icon}>
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
                      <span className={TopSearchCss.close_icon}>
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
                  <ReactMultiSelectCheckboxes options={options4} />
                </div>
              </FormGroup>
              <FormGroup>
                <Label>
                  Add bots to speciﬁc categories:
                  <span>Multiple selection allowed</span>
                </Label>
                <div className={TopSearchCss.multi_select_box}>
                  <div className={TopSearchCss.search_box}>
                    <Label>
                      <Input type="checkbox" />
                      Select all
                    </Label>
                    <div className={TopSearchCss.searchInput}>
                      <span className={TopSearchCss.search_icon}>
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
                      <span className={TopSearchCss.close_icon}>
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
                  <ReactMultiSelectCheckboxes options={options5} />
                </div>
              </FormGroup>
              <div className={TopSearchCss.btn_block}>
                <Link to="#0" onClick={toggle2}>
                  CANCEL
                </Link>
                <Link to="/project-bots-list" className="style_two">
                  Save
                </Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default TopSearch;
