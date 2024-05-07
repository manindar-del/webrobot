import React from "react";
import "../component/new-scarper.css";
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
import InnerHeader from "../component/InnerHeader";
import pluseIcon from "../images/pluseIcon.png";
import searchIcon from "../images/searchIcon.png";
import uploadIcon from "../images/uploadIcon.png";
import downloadIcon from "../images/downloadIcon.png";
import eyeIcon from "../images/eyeIcon.png";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";
// import ReactTooltip from "react-tooltip";
import screenshot from "../images/screenshot.png";

import info from "../images/info.png";
import clearIcon from "../images/clearIcon.png";
import settingIcon from "../images/settingIcon.png";
import saveBot from "../images/saveBot.png";
import shoping from "../images/shoping.png";
import whiteSearch from "../images/whiteSearch.png";
import searchTeam from "../images/searchTeam.png";
import searchTeamTwo from "../images/searchTeamTwo.png";
import filtterIcon from "../images/filtterIcon.png";
import recordIcon from "../images/recordIcon.png";

function DesignerSimpleFilters() {
  return (
    <>
      <InnerHeader />
      <section className="scarperWrap">
        <div className="section_title">
          <h4>New Data Extraction Bot/Scraper - Creation Panel</h4>
        </div>
        <div className="scarperForm">
          <Form>
            <FormGroup className="form-group">
              <Label for="ScraperName">Bot/Scraper Name:</Label>
              <Input
                className="form-control"
                id="ScraperName"
                name="text"
                placeholder="Write a recognizable name for your web bot/scraper"
                type="text"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="Bot-Category">Bot Category:</Label>
              <Input
                className="form-control"
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
              <span className="selectPluseIcon">
                <img src={pluseIcon} alt="Icom" />
              </span>
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="Bot-Category">Extraction Project:</Label>
              <Input
                className="form-control"
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
              <span className="selectPluseIcon">
                <img src={pluseIcon} alt="Icom" />
              </span>
            </FormGroup>
          </Form>
        </div>
        <div className="scarperForm scarperFormTwo">
          <Form>
            <FormGroup className="form-group">
              <Label for="ScraperName">Starting Page URL:</Label>
              <span className="p-relative">
                <Input
                  className="form-control"
                  id="ScraperName"
                  name="text"
                  placeholder="https://www.walmart.com"
                  type="text"
                />
                <img
                  data-tip="Write the web page on which you start your items/records research. You can also write the search results page and skip the search terms/input variables initial process."
                  src={info}
                  alt="Info"
                />
                {/* <ReactTooltip /> */}
              </span>
              <FormGroup className="form-group form-check form-switch p-0 mb-0">
                <Label class="form-check-label" for="flexSwitchCheckDefault">
                  Single Post{" "}
                  <img
                    data-tip="Use it when you search a single item/record page at once (for ex. a speciﬁc Title or SKU)."
                    src={info}
                    className="info"
                    alt="Info"
                  />
                  {/* <ReactTooltip /> */}
                </Label>
                <Input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <Label class="form-check-label" for="flexSwitchCheckDefault">
                  Multiple Post{" "}
                  <img
                    data-tip="Use it when you search multiple items/records using the same search term (product listing pages, list of product reviews, real estates, etc.)."
                    src={info}
                    className="info"
                    alt="Info"
                  />
                  {/* <ReactTooltip /> */}
                </Label>
              </FormGroup>
              <Link to="/designer-simple-filters">
                <Button type="submit" className="green_btn">
                  <img src={eyeIcon} alt="eyeIcon" /> Fetch &amp; Preview
                </Button>
              </Link>
              <div className="action-btn">
                <Link to="/new-scarper" className="red-btn">
                  <img src={clearIcon} alt="clearIcon" width="12" />
                  Clear
                </Link>
                <Link
                  data-tip="It will activate the 'Extraction Bot Preview' tab to show you what your bot/scraper will get."
                  to="/designer-simple-test-preview"
                  className="blue_btn"
                >
                  <img src={settingIcon} alt="settingIcon" width="16" />
                  Test &amp; Perview{" "}
                </Link>
                <Link to="#0" className="green_btn">
                  <img width="24" src={saveBot} alt="saveBot" />
                  Save Bot
                </Link>
                <div className="action_option">
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
            </FormGroup>
          </Form>
        </div>
        <div className="scarperForm scarperFormThree">
          <FormGroup className="form-group">
            <Input
              type="textaera"
              placeholder="Import and use a template Free & Premium scraper templates from the community. use them as they are or edit them as you wish"
            />
            <Button type="submit">
              <img src={shoping} width="23" alt="shoping" />
              Templates Marketplace
            </Button>
          </FormGroup>
          <div className="radio-block">
            <ButtonGroup className="button-group">
              <Button className="active">Simplified No-Code Mode</Button>
              <Button>Advanced Mode</Button>
              <Button>Bot Training Mode</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="accordion-block">
          <div className="row">
            <div className="col-xl-6">
              <div className="tabsBlock">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      data-tip="The preview appears here after clicking 'FETCH &amp; PREVIEW'  "
                      onClick={function noRefCheck() {}}
                    >
                      Starting Page Preview
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-tip="The preview appears here after clicking the button 'Fetch &amp; Preview Search Results' "
                      className="active"
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
                  <TabPane tabId="1">
                    <img src={screenshot} alt="SS" />
                  </TabPane>
                  <TabPane tabId="2"></TabPane>
                  <TabPane tabId="3"></TabPane>
                  <TabPane tabId="4"></TabPane>
                </TabContent>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tabsBlock">
                <Nav tabs>
                  <NavItem>
                    <NavLink onClick={function noRefCheck() {}}>
                      Starting Page Preview
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="active"
                      onClick={function noRefCheck() {}}
                    >
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
                <TabContent className="tab-content-right" activeTab="2">
                  <TabPane tabId="1"></TabPane>
                  <TabPane tabId="2">
                    <div className="tab-info">
                      <h5>
                        <img src={searchIcon} alt="searchIcon" />
                        Search Results Page Filter - Variables/Keywords
                      </h5>
                      <Form>
                        <FormGroup className="form-group">
                          <Button type="submit">Search Button</Button>
                          <Input
                            type="text"
                            placeholder="Select or write the path of the icon/button/link used to start the search"
                          />
                          <div className="btn_block">
                            <button type="button" className="checkbox">
                              Select
                            </button>
                          </div>
                        </FormGroup>
                        <div className="radio-block">
                          <Label>Search Type</Label>
                          <ButtonGroup className="button-group">
                            <Button>Link</Button>
                            <Button className="active">Input Field</Button>
                            <Button>Range</Button>
                          </ButtonGroup>
                        </div>
                        <FormGroup className="form-group">
                          <Button type="submit" className="w-210">
                            Keyword Input Field 1
                          </Button>
                          <Input
                            type="text"
                            placeholder="Select or write the path of the input field for the search term"
                          />
                          <div className="btn_block">
                            <button type="button" className="checkbox">
                              Select
                            </button>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Button type="submit">
                            Write/Upload Search Terms
                          </Button>
                          <Input
                            type="textarea"
                            placeholder="Write one or more keywords for your automatic search or upload a CSV (write multiple keywords separated by comma)."
                          />
                          <div className="btn_block">
                            <span className="uploadicon">
                              <img
                                data-tip="Upload search terms CSV"
                                src={uploadIcon}
                                alt=""
                              />
                              {/* <ReactTooltip /> */}
                            </span>
                            <span className="downloadicon">
                              <img
                                data-tip="Download CSV template"
                                src={downloadIcon}
                                alt=""
                              />
                              {/* <ReactTooltip /> */}
                            </span>
                          </div>
                        </FormGroup>
                        <div className="input-block">
                          <span className="input-block-title">
                            Concurrent Search
                          </span>
                          <div className="radio-block">
                            <Label>Search Type</Label>
                            <ButtonGroup className="button-group">
                              <Button>Link</Button>
                              <Button className="active">Input Field</Button>
                              <Button>Range</Button>
                            </ButtonGroup>
                          </div>
                          <FormGroup className="form-group">
                            <Button type="submit">Link Area</Button>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the search/filter link"
                            />
                            <div className="btn_block">
                              <button type="button" className="checkbox">
                                Select
                              </button>
                            </div>
                          </FormGroup>
                          <FormGroup className="form-group">
                            <Button type="submit">
                              Write/Upload <br /> Link Names
                            </Button>
                            <Input
                              type="textarea"
                              placeholder="Write one or more terms for your automatic search or upload a CSV (write multiple filter/search terms separated by comma)."
                            />
                          </FormGroup>
                          <div className="btnBlock">
                            <Button type="submit" className="green_btn">
                              <img src={eyeIcon} alt="eyeIcon" />
                              <span>
                                Fetch &amp; Preview
                                <br /> Search Results
                              </span>
                            </Button>
                          </div>
                        </div>
                        <div className="input-block">
                          <span className="input-block-title">
                            <strong>Subsearch</strong>(if it appears after the
                            ﬁrst search click)
                          </span>
                          <FormGroup className="form-group">
                            <Button type="submit">Search Button</Button>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the search icon/button"
                            />
                            <div className="btn_block">
                              <button type="button" className="checkbox">
                                Select
                              </button>
                            </div>
                          </FormGroup>
                          <div className="radio-block">
                            <Label>Search Type</Label>
                            <ButtonGroup className="button-group">
                              <Button>Link</Button>
                              <Button>Input Field</Button>
                              <Button className="active">Range</Button>
                            </ButtonGroup>
                          </div>
                          <FormGroup className="form-group">
                            <Button type="submit">Min Value Field</Button>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the min value of the range"
                            />
                            <div className="btn_block">
                              <button type="button" className="checkbox">
                                Select
                              </button>
                            </div>
                          </FormGroup>
                          <FormGroup className="form-group">
                            <Button type="submit">Max Value Terms</Button>
                            <Input
                              type="textarea"
                              placeholder="Write one or more values for your automatic search or upload a CSV (write multiple filter/search terms separated by comma)"
                            />
                            <div className="btn_block">
                              <span className="uploadicon">
                                <img src={uploadIcon} alt="" />
                              </span>
                              <span className="downloadicon">
                                <img src={downloadIcon} alt="" />
                              </span>
                            </div>
                          </FormGroup>
                          <FormGroup className="form-group">
                            <Button type="submit">Max Value Field</Button>
                            <Input
                              type="text"
                              placeholder="Select or write the path of the min value of the range"
                            />
                            <div className="btn_block">
                              <button type="button" className="checkbox">
                                Select
                              </button>
                            </div>
                          </FormGroup>
                          <FormGroup className="form-group">
                            <Button type="submit">Max Value Terms</Button>
                            <Input
                              type="textarea"
                              placeholder="Write one or more values for your automatic search or upload a CSV (write multiple filter/search terms separated by comma)"
                            />
                            <div className="btn_block">
                              <span className="uploadicon">
                                <img src={uploadIcon} alt="" />
                              </span>
                              <span className="downloadicon">
                                <img src={downloadIcon} alt="" />
                              </span>
                            </div>
                          </FormGroup>
                          <div className="btnBlock">
                            <Button type="submit" className="green_btn">
                              <img src={eyeIcon} alt="eyeIcon" />
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
                  <TabPane tabId="3"></TabPane>
                  <TabPane tabId="4"></TabPane>
                </TabContent>
                <div className="main-btn_block">
                  <ul>
                    <li>
                      <span data-tip="It opens the ﬁrst tab.">
                        <Link to="/designer-simple-filters">
                          <img width="24" src={whiteSearch} alt="whiteSearch" />
                          Initial Search Setting
                        </Link>
                      </span>
                      <span data-tip="When there are more search ﬁelds e.g. 'category' and 'region'. ">
                        <Link
                          to="/designer-simple-filters"
                          className="border-color"
                        >
                          <img width="24" src={searchTeam} alt="searchTeam" />
                          Add Concurrent Search Team
                        </Link>
                      </span>
                      <span data-tip="It applies after the ﬁrst search action setting.">
                        <Link
                          to="/designer-simple-filters"
                          className="border-color"
                        >
                          <img
                            width="22"
                            src={searchTeamTwo}
                            alt="searchTeamTwo"
                          />
                          Add Sub search
                        </Link>
                      </span>
                      {/* <ReactTooltip /> */}
                      {/* <ReactTooltip /> */}
                      {/* <ReactTooltip /> */}
                    </li>
                    <li>
                      <span data-tip="After clicking, it opens the 'Search Results Page Filter' tab to set the item ﬁlters if any (e.g. sidebar area).">
                        <Link to="#0">
                          <img width="15" src={filtterIcon} alt="filtterIcon" />
                          Search Results Page Filter Setting
                        </Link>
                      </span>
                      {/* <ReactTooltip /> */}
                    </li>
                    <li>
                      <span data-tip="After setting all search terms and ﬁlters (if any) click this to open 'Record's Path Setting' tab and tell where to take the data.">
                        <Link to="#0">
                          <img width="20" src={recordIcon} alt="recordIcon" />
                          Item/Record Setting
                        </Link>
                      </span>
                      {/* <ReactTooltip /> */}
                    </li>
                  </ul>
                  <div className="action-btn text-right">
                    <Link to="#0" className="red-btn">
                      <img src={clearIcon} alt="clearIcon" width="12" /> Clear
                    </Link>
                    <Link to="#0" className="blue_btn">
                      <img src={settingIcon} alt="settingIcon" width="16" />{" "}
                      Test &amp; Perview{" "}
                    </Link>
                    <Link to="#0" className="green_btn">
                      <img width="24" src={saveBot} alt="saveBot" />
                      Save Bot
                    </Link>
                    <div className="action_option">
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

export default DesignerSimpleFilters;
