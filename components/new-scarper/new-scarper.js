import React from "react";
import NewScarperCss from "./new-scarper.module.css";
import {
  Form,
  Label,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ButtonGroup,
} from "reactstrap";
import InnerHeader from "../inner-header/InnerHeader";
// import pluseIcon from "../images/pluseIcon.png";
// import searchIcon from "../images/searchIcon.png";
// import uploadIcon from "../images/uploadIcon.png";
// import downloadIcon from "../images/downloadIcon.png";
// import eyeIcon from "../images/eyeIcon.png";
// import Button from "@restart/ui/esm/Button";
import Link from "next/link";
// import ReactTooltip from "react-tooltip";
// import info from "../images/info.png";
// import clearIcon from "../images/clearIcon.png";
// import settingIcon from "../images/settingIcon.png";
// import saveBot from "../images/saveBot.png";
// import shoping from "../images/shoping.png";
// import whiteSearch from "../images/whiteSearch.png";
// import searchTeam from "../images/searchTeam.png";
// import searchTeamTwo from "../images/searchTeamTwo.png";
// import filtterIcon from "../images/filtterIcon.png";
// import recordIcon from "../images/recordIcon.png";
import Image from "next/image";
import Button from "../../componentsdummy/Button/Button";

function NewScarper() {
  return (
    <>
      <InnerHeader />
      <section className={NewScarperCss.scarperWrap}>
        <div className={NewScarperCss.section_title}>
          <h4>New Data Extraction Bot/Scraper - Creation Panel</h4>
        </div>
        <div className={NewScarperCss.scarperForm}>
          <Form>
            <FormGroup className={NewScarperCss.form_group}>
              <Label for="ScraperName">Bot/Scraper Name:</Label>
              <Input
                className={NewScarperCss.form_control}
                id="ScraperName"
                name="text"
                placeholder="Write a recognizable name for your web bot/scraper"
                type="text"
              />
            </FormGroup>
            <FormGroup className={NewScarperCss.form_group}>
              <Label for="Bot-Category">Bot Category:</Label>
              <Input
                className={NewScarperCss.form_control}
                id="Bot-Category"
                name="select"
                type="select"
              >
                <option>
                  Select the categoy for this bot or create a new one
                </option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
              <span className={NewScarperCss.selectPluseIcon}>
                <Image
                  width={20}
                  height={20}
                  src={"/images/pluseIcon.png"}
                  alt="Icom"
                />
              </span>
            </FormGroup>
            <FormGroup className={NewScarperCss.form_group}>
              <Label for="Bot-Category">Extraction Project:</Label>
              <Input
                className={NewScarperCss.form_control}
                id="Bot-Category"
                name="select"
                type="select"
              >
                <option>
                  Select the project for this bot or create a new one
                </option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
              <span className={NewScarperCss.selectPluseIcon}>
                <Image
                  width={20}
                  height={20}
                  src={"/images/pluseIcon.png"}
                  alt="Icom"
                />
              </span>
            </FormGroup>
          </Form>
        </div>
        <div
          className={`${NewScarperCss.scarperForm} ${NewScarperCss.scarperFormTwo}`}
        >
          <Form>
            <FormGroup className={NewScarperCss.form_group}>
              <Label for="ScraperName">Starting Page URL:</Label>
              <span className={NewScarperCss.p_relative}>
                <Input
                  className={NewScarperCss.form_control}
                  id="ScraperName"
                  name="text"
                  placeholder="https://www.walmart.com"
                  type="text"
                />
                <Image
                  width={20}
                  height={20}
                  data-tip="Write the web page on which you start your items/records research. You can also write the search results page and skip the search terms/input variables initial process."
                  src={"/images/info.png"}
                  alt="Info"
                />
                {/* <ReactTooltip /> */}
              </span>
              <FormGroup
                className={`${NewScarperCss.form_group} ${NewScarperCss.form_check} ${NewScarperCss.form_switch} p-0 mb-0`}
              >
                <Label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  Single Post{" "}
                  <Image
                    width={20}
                    height={20}
                    data-tip="Use it when you search a single item/record page at once (for ex. a speciﬁc Title or SKU)."
                    src={"/images/info.png"}
                    className="info"
                    alt="Info"
                  />
                  {/* <ReactTooltip /> */}
                </Label>
                <Input
                  className={NewScarperCss.form_check_input}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <Label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  Multiple Post{" "}
                  <Image
                    width={20}
                    height={20}
                    data-tip="Use it when you search multiple items/records using the same search term (product listing pages, list of product reviews, real estates, etc.)."
                    src={"/images/info.png"}
                    className={NewScarperCss.info}
                    alt="Info"
                  />
                  {/* <ReactTooltip /> */}
                </Label>
              </FormGroup>
              <Link href="/designer-simple-filters">
                <a>
                  <Button type="submit" className={NewScarperCss.green_btn}>
                    <Image
                      width={20}
                      height={20}
                      src={"/images/eyeIcon.png"}
                      alt="eyeIcon"
                    />{" "}
                    Fetch &amp; Preview
                  </Button>
                </a>
              </Link>
              <div className={NewScarperCss.action_btn}>
                <Link href="/new-scarper" className={NewScarperCss.red_btn}>
                  <a>
                    <Image
                      width={12}
                      height={20}
                      src={"/images/clearIcon.png"}
                      alt="clearIcon"
                    />
                    Clear
                  </a>
                </Link>
                <Link
                  data-tip="It will activate the 'Extraction Bot Preview' tab to show you what your bot/scraper will get."
                  href="/designer-simple-test-preview"
                  className={NewScarperCss.blue_btn}
                >
                  <a>
                    <Image
                      width={16}
                      height={20}
                      src={"/images/settingIcon.png"}
                      alt="settingIcon"
                    />
                    Test &amp; Perview{" "}
                  </a>
                </Link>
                <div className={NewScarperCss.dropDownOption}>
                  <Link href="#0" className={NewScarperCss.green_btn}>
                    <a>
                      <Image
                        width={24}
                        height={20}
                        src={"/images/saveBot.png"}
                        alt="saveBot"
                      />
                      Save Bot
                    </a>
                  </Link>
                  <div className={NewScarperCss.action_option}>
                    <span data-tip="Save to Dashboard">Save to Dashboard</span>
                    <span data-tip="Save as Private Template">
                      Save as Private Template
                    </span>
                    <span data-tip="Publish as Template on Marketplace">
                      Publish as Template on Marketplace
                    </span>
                    {/* <ReactTooltip /> */}
                    {/* <ReactTooltip /> */}
                    {/* <ReactTooltip /> */}
                    {/* <ReactTooltip /> */}
                  </div>
                </div>
              </div>
            </FormGroup>
          </Form>
        </div>
        <div
          className={`${NewScarperCss.scarperForm} ${NewScarperCss.scarperFormThree}`}
        >
          <FormGroup className={NewScarperCss.form_group}>
            <Input
              type="textaera"
              placeholder="Import and use a template Free & Premium scraper templates from the community. use them as they are or edit them as you wish"
            />
            <Button type="submit">
              <Image
                width={23}
                height={20}
                src={"/images/shoping.png"}
                alt="shoping"
              />
              Templates Marketplace
            </Button>
          </FormGroup>
          <div className={NewScarperCss.radio_block}>
            <ButtonGroup className={NewScarperCss.button_group}>
              <Button className="active">Simplified No-Code Mode</Button>
              <Button>Advanced Mode</Button>
              <Button>Bot Training Mode</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={NewScarperCss.accordion_block}>
          <div className="row">
            <div className="col-xl-6">
              <div className={NewScarperCss.tabsBlock}>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      data-tip="The preview appears here after clicking 'FETCH &amp; PREVIEW'  "
                      className="active"
                      onClick={function noRefCheck() {}}
                    >
                      Starting Page Preview
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-tip="The preview appears here after clicking the button 'Fetch &amp; Preview Search Results' "
                      className=""
                      onClick={function noRefCheck() {}}
                    >
                      Search Results<span>Page Preview</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-tip="The record detail page preview appears here after clicking the Start Selecting Records Elements button."
                      className=""
                      onClick={function noRefCheck() {}}
                    >
                      Record's Page Preview<span>(post elements page)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-tip="It opens upon clicking the 'Test &amp; Preview' button to show some sample results."
                      className=""
                      onClick={function noRefCheck() {}}
                    >
                      Extraction Bot Results Preview
                      <span>(test what you will scrape)</span>
                    </NavLink>
                  </NavItem>
                  {/* <ReactTooltip /> */}
                  {/* <ReactTooltip /> */}
                  {/* <ReactTooltip /> */}
                  {/* <ReactTooltip /> */}
                </Nav>
                <TabContent activeTab="1">
                  <TabPane tabId="1"></TabPane>
                  <TabPane tabId="2"></TabPane>
                  <TabPane tabId="3"></TabPane>
                  <TabPane tabId="4"></TabPane>
                </TabContent>
              </div>
            </div>
            <div className="col-xl-6">
              <div className={NewScarperCss.tabsBlock}>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className="active"
                      onClick={function noRefCheck() {}}
                    >
                      Starting Page Preview
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="" onClick={function noRefCheck() {}}>
                      Search Results
                      <br />
                      Page Preview
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="" onClick={function noRefCheck() {}}>
                      Record's Page Preview
                      <br />
                      <span>(post elements page)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="" onClick={function noRefCheck() {}}>
                      Extraction Bot Results Preview
                      <br />
                      <span>(test what you will scrape)</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className={NewScarperCss.tab_content_right}
                  activeTab="1"
                >
                  <TabPane tabId="1">
                    <div className={NewScarperCss.tab_info}>
                      <h5>
                        <Image
                          width={20}
                          height={20}
                          src={"/images/searchIcon.png"}
                          alt="searchIcon"
                        />
                        First Search Stage - Variables/Keywords
                      </h5>
                      <Form>
                        <FormGroup className={NewScarperCss.form_group}>
                          <Button type="submit">Search Button</Button>
                          <span className={NewScarperCss.p_relatve}>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the icon/button/link used to start the search"
                            />
                            <Image
                              width={10}
                              height={10}
                              data-tip="For example, click the 'Select' button and then the magnifying glass. "
                              src={"/images/info.png"}
                              alt="info"
                            />
                            {/* <ReactTooltip /> */}
                          </span>
                          <div className={NewScarperCss.btn_block}>
                            <button
                              type="button"
                              className={NewScarperCss.checkbox}
                            >
                              Select
                            </button>
                          </div>
                        </FormGroup>
                        <div className={NewScarperCss.radio_block}>
                          <Label>Search Type</Label>
                          <ButtonGroup className={NewScarperCss.button_group}>
                            <Button>Link</Button>
                            <Button className="active">Input Field</Button>
                            <Button>Range</Button>
                          </ButtonGroup>
                        </div>
                        <FormGroup className={NewScarperCss.form_group}>
                          <Button type="submit" className={NewScarperCss.w_210}>
                            Keyword Input Field 1
                          </Button>
                          <span className={NewScarperCss.p_relatve}>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the input field for the search term"
                            />
                            <Image
                              width={10}
                              height={10}
                              data-tip="For example, click the 'Select' button and then the top search bar area. "
                              src={"/images/info.png"}
                              alt="info"
                            />
                            {/* <ReactTooltip /> */}
                          </span>
                          <div className={NewScarperCss.btn_block}>
                            <button
                              type="button"
                              className={NewScarperCss.checkbox}
                            >
                              Select
                            </button>
                          </div>
                        </FormGroup>
                        <FormGroup className={NewScarperCss.form_group}>
                          <Button type="submit">
                            Write/Upload Search Terms
                          </Button>
                          <Input
                            type="textarea"
                            placeholder="Write one or more keywords for your automatic search or upload a CSV (write multiple keywords separated by comma)."
                          />
                          <div className={NewScarperCss.btn_block}>
                            <span className={NewScarperCss.uploadicon}>
                              <Image
                                width={20}
                                height={20}
                                data-tip="Upload search terms CSV"
                                src={"/images/uploadIcon.png"}
                                alt=""
                              />
                              {/* <ReactTooltip /> */}
                            </span>
                            <span className={NewScarperCss.downloadicon}>
                              <Image
                                width={20}
                                height={20}
                                data-tip="Download CSV template"
                                src={"/images/downloadIcon.png"}
                                alt=""
                              />
                              {/* <ReactTooltip /> */}
                            </span>
                          </div>
                        </FormGroup>
                        <div className={NewScarperCss.input_block}>
                          <span className={NewScarperCss.input_block_title}>
                            Concurrent Search
                          </span>
                          <div className={NewScarperCss.radio_block}>
                            <Label>Search Type</Label>
                            <ButtonGroup className={NewScarperCss.button_group}>
                              <Button>Link</Button>
                              <Button className="active">Input Field</Button>
                              <Button>Range</Button>
                            </ButtonGroup>
                          </div>
                          <FormGroup className={NewScarperCss.form_group}>
                            <Button type="submit">Link Area</Button>
                            <span className={NewScarperCss.p_relatve}>
                              <Input
                                type="text"
                                placeholder="Select or write the path of the search/filter link"
                              />
                              <Image
                                width={20}
                                height={20}
                                data-tip="For example, click the 'Select' button and then menu or sidebar area containing the categories or ﬁlter terms."
                                src={"/images/info.png"}
                                alt="info"
                              />
                              {/* <ReactTooltip /> */}
                            </span>
                            <div className={NewScarperCss.btn_block}>
                              <button
                                type="button"
                                className={NewScarperCss.checkbox}
                              >
                                Select
                              </button>
                            </div>
                          </FormGroup>
                          <FormGroup className={NewScarperCss.form_group}>
                            <Button type="submit">
                              Write/Upload <br /> Link Names
                            </Button>
                            <Input
                              type="textarea"
                              placeholder="Write one or more terms for your automatic search or upload a CSV (write multiple filter/search terms separated by comma)."
                            />
                          </FormGroup>
                          <div className={NewScarperCss.btnBlock}>
                            <Button
                              data-tip="It refreshes the site in the Search Results Page Preview"
                              type="submit"
                              className={NewScarperCss.green_btn}
                            >
                              <Image
                                width={20}
                                height={20}
                                src={"/images/eyeIcon.png"}
                                alt="eyeIcon"
                              />
                              <span>
                                Fetch &amp; Preview
                                <br /> Search Results
                              </span>
                              {/* <ReactTooltip /> */}
                            </Button>
                          </div>
                        </div>
                        <div className={NewScarperCss.input_block}>
                          <span className={NewScarperCss.input_block_title}>
                            <strong>Subsearch</strong>(if it appears after the
                            ﬁrst search click)
                          </span>
                          <FormGroup className={NewScarperCss.form_group}>
                            <Button type="submit">Search Button</Button>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the search icon/button"
                            />
                            <div className={NewScarperCss.btn_block}>
                              <button
                                type="button"
                                className={NewScarperCss.checkbox}
                              >
                                Select
                              </button>
                            </div>
                          </FormGroup>
                          <div className={NewScarperCss.radio_block}>
                            <Label>Search Type</Label>
                            <ButtonGroup className={NewScarperCss.button_group}>
                              <Button>Link</Button>
                              <Button>Input Field</Button>
                              <Button className="active">Range</Button>
                            </ButtonGroup>
                          </div>
                          <FormGroup className={NewScarperCss.form_group}>
                            <Button type="submit">Min Value Field</Button>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the min value of the range"
                            />
                            <div className={NewScarperCss.btn_block}>
                              <button
                                type="button"
                                className={NewScarperCss.checkbox}
                              >
                                Select
                              </button>
                            </div>
                          </FormGroup>
                          <FormGroup className={NewScarperCss.form_group}>
                            <Button type="submit">Max Value Terms</Button>
                            <Input
                              type="textarea"
                              placeholder="Write one or more values for your automatic search or upload a CSV (write multiple filter/search terms separated by comma)"
                            />
                            <div className={NewScarperCss.btn_block}>
                              <span className={NewScarperCss.uploadicon}>
                                <Image
                                  width={20}
                                  height={20}
                                  src={"/images/uploadIcon.png"}
                                  alt=""
                                />
                              </span>
                              <span className={NewScarperCss.downloadicon}>
                                <Image
                                  width={20}
                                  height={20}
                                  src={"/images/downloadIcon.png"}
                                  alt=""
                                />
                              </span>
                            </div>
                          </FormGroup>
                          <FormGroup className={NewScarperCss.form_group}>
                            <Button type="submit">Max Value Field</Button>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the min value of the range"
                            />
                            <div className={NewScarperCss.btn_block}>
                              <button
                                type="button"
                                className={NewScarperCss.checkbox}
                              >
                                Select
                              </button>
                            </div>
                          </FormGroup>
                          <FormGroup className={NewScarperCss.form_group}>
                            <Button type="submit">Max Value Terms</Button>
                            <Input
                              type="textarea"
                              placeholder="Write one or more values for your automatic search or upload a CSV (write multiple filter/search terms separated by comma)"
                            />
                            <div className={NewScarperCss.btn_block}>
                              <span className={NewScarperCss.uploadicon}>
                                <Image
                                  width={20}
                                  height={20}
                                  src={"/images/uploadIcon.png"}
                                  alt=""
                                />
                              </span>
                              <span className={NewScarperCss.downloadicon}>
                                <Image
                                  width={20}
                                  height={20}
                                  src={"/images/downloadIcon.png"}
                                  alt=""
                                />
                              </span>
                            </div>
                          </FormGroup>
                          <div className="btnBlock">
                            <Button
                              type="submit"
                              className={NewScarperCss.green_btn}
                            >
                              <Image
                                width={20}
                                height={20}
                                src={"/images/eyeIcon.png"}
                                alt="eyeIcon"
                              />
                              <span>
                                Fetch &amp; Preview
                                <br /> Search Results
                              </span>
                            </Button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </TabPane>
                  <TabPane tabId="2"></TabPane>
                  <TabPane tabId="3"></TabPane>
                  <TabPane tabId="4"></TabPane>
                </TabContent>
                <div className={NewScarperCss.main_btn_block}>
                  <ul>
                    <li>
                      <span data-tip="It opens the ﬁrst tab.">
                        <Link href="/designer-simple-filters">
                          <a>
                            <Image
                              width={24}
                              height={20}
                              src={"/images/whiteSearch.png"}
                              alt="whiteSearch"
                            />
                            Initial Search Setting
                          </a>
                        </Link>
                      </span>
                      <span data-tip="When there are more search ﬁelds e.g. 'category' and 'region'. ">
                        <Link
                          href="/designer-simple-filters"
                          className={NewScarperCss.border_color}
                        >
                          <a>
                            <Image
                              width={24}
                              height={20}
                              src={"/images/searchTeam.png"}
                              alt="searchTeam"
                            />
                            Add Concurrent Search Team
                          </a>
                        </Link>
                      </span>
                      <span data-tip="It applies after the ﬁrst search action setting.">
                        <Link
                          href="/designer-simple-filters"
                          className={NewScarperCss.border_color}
                        >
                          <a>
                            <Image
                              width={22}
                              height={20}
                              src={"/images/searchTeamTwo.png"}
                              alt="searchTeamTwo"
                            />
                            Add Sub search
                          </a>
                        </Link>
                      </span>
                      {/* <ReactTooltip /> */}
                      {/* <ReactTooltip /> */}
                      {/* <ReactTooltip /> */}
                    </li>
                    <li>
                      <span data-tip="After clicking, it opens the 'Search Results Page Filter' tab to set the item ﬁlters if any (e.g. sidebar area).">
                        <Link href="#0">
                          <a>
                            <Image
                              width={15}
                              height={20}
                              src={"/images/filtterIcon.png"}
                              alt="filtterIcon"
                            />
                            Search Results Page Filter Setting
                          </a>
                        </Link>
                      </span>
                      {/* <ReactTooltip /> */}
                    </li>
                    <li>
                      <span data-tip="After setting all search terms and ﬁlters (if any) click this to open 'Record's Path Setting' tab and tell where to take the data.">
                        <Link href="#0">
                          <a>
                            <Image
                              width={20}
                              height={20}
                              src={"/images/recordIcon.png"}
                              alt="recordIcon"
                            />
                            Item/Record Setting
                          </a>
                        </Link>
                      </span>
                      {/* <ReactTooltip /> */}
                    </li>
                  </ul>
                  <div
                    className={`${NewScarperCss.action_btn} ${NewScarperCss.text_right}`}
                  >
                    <Link href="#0" className={NewScarperCss.red_btn}>
                      <a>
                        <Image
                          width={12}
                          height={20}
                          src={"/images/clearIcon.png"}
                          alt="clearIcon"
                        />{" "}
                        Clear
                      </a>
                    </Link>
                    <Link href="#0" className={NewScarperCss.blue_btn}>
                      <a>
                        <Image
                          width={16}
                          height={20}
                          src={"/images/settingIcon.png"}
                          alt="settingIcon"
                        />{" "}
                        Test &amp; Perview{" "}
                      </a>
                    </Link>
                    <Link href="#0" className={NewScarperCss.green_btn}>
                      <a>
                        <Image
                          width={24}
                          height={20}
                          src={"/images/saveBot.png"}
                          alt="saveBot"
                        />
                        Save Bot
                      </a>
                    </Link>
                    <div className={NewScarperCss.action_option}>
                      <span data-tip="Save to Dashboard">
                        Save to Dashboard
                      </span>
                      <span data-tip="Save as Private Template">
                        Save as Private Template
                      </span>
                      <span data-tip="Publish as Template on Marketplace">
                        Publish as Template on Marketplace
                      </span>
                      {/* <ReactTooltip /> */}
                      {/* <ReactTooltip /> */}
                      {/* <ReactTooltip /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewScarper;
