import React from "react";
import "../component/new-scarper.css";
import {
  Table,
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
import InnerHeader from "./InnerHeader";
import pluseIcon from "../images/pluseIcon.png";
import eyeIcon from "../images/eyeIcon.png";
import saveimg from "../images/save-img.png";
import editicon from "../images/edit-icon.png";
import shopingicon from "../images/shoping-icon.png";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
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

function DesignerSimpleTestPreview() {
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
                <ReactTooltip />
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
                  <ReactTooltip />
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
                  <ReactTooltip />
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
                  <ReactTooltip />
                  <ReactTooltip />
                  <ReactTooltip />
                  <ReactTooltip />
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
                </Nav>
                <TabContent activeTab="1">
                  <TabPane tabId="1">
                    <p>
                      Here is a data sample with a few records you can extract
                      with the web bot/scraper you've just designed. Have a look
                      and see how well it scrapes the web. You can always edit
                      every setting before saving your bot and start your
                      extraction project.
                    </p>
                    <div className="table_responsive">
                      <Table>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Model</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Delivery</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              SAMSUNG 32" Class HD (720P) Smart LED TV UN32M4500
                            </td>
                            <td>UN32M4500BFXZA</td>
                            <td>4.3 stars</td>
                            <td>$217.99</td>
                            <td>Free shipping</td>
                          </tr>
                          <tr>
                            <td>
                              LG 43" Class 4K UHD 2160P Smart TV 43UN6955ZUF
                            </td>
                            <td>43UN6955ZUF</td>
                            <td>4.3 stars</td>
                            <td>$358.00</td>
                            <td>Free shipping</td>
                          </tr>
                          <tr>
                            <td>VIZIO 32" Class HD Smart TV D-Series D32h-J</td>
                            <td>D32h-J09</td>
                            <td>4.4 stars</td>
                            <td>$176.00</td>
                            <td>Free shipping</td>
                          </tr>
                          <tr>
                            <td>
                              onn. 70” Class 4K UHD (2160P) LED Roku Smart TV
                              HDR
                            </td>
                            <td>100012588</td>
                            <td>4 stars</td>
                            <td>$579.00</td>
                            <td>Freight shipping</td>
                          </tr>
                          <tr>
                            <td>
                              TCL 32" Class 720P HD LED Roku Smart TV 3 Series
                              32S331
                            </td>
                            <td>32S331</td>
                            <td>4.3 stars</td>
                            <td>$159.00</td>
                            <td>Free shipping</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
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
                    <NavLink onClick={function noRefCheck() {}}>
                      Search Results
                      <br />
                      Page Preview
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={function noRefCheck() {}}>
                      Record's Page Preview
                      <br />
                      <span>(post elements page)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={function noRefCheck() {}}>
                      Extraction Bot Results Preview
                      <br />
                      <span>(test what you will scrape)</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="tab-content-right" activeTab="2">
                  <TabPane tabId="1"></TabPane>
                  <TabPane tabId="2">
                    <p>
                      Here's the dataset sample for you to check. You can make
                      changes to the extraction bot at any time. Just click the
                      previous tabs or buttons or start from the beginning.
                    </p>
                    <h6>
                      Are you satisﬁed with your extraction bot and the dataset
                      preview?
                    </h6>
                    <p>
                      Good! Now you have three ways to take good care of it.
                    </p>
                    <ul>
                      <li>
                        <h6>
                          <span>
                            <img width="30" src={saveimg} alt="saveimg" />
                          </span>
                          SAVE TO DASHBOARD
                        </h6>
                        <p>
                          You can save your bot as an active scraper available
                          in your dashboard and ready to extract data when you
                          start the project it's associated with.
                        </p>
                      </li>
                      <li>
                        <h6>
                          <span>
                            <img width="30" src={editicon} alt="editicon" />
                          </span>
                          SAVE AS PRIVATE TEMPLATE
                        </h6>
                        <p>
                          You can save your bot as an inactive draft. It won't
                          run any data extraction when you start a project. But
                          you can retrieve it any time and make changes until
                          you are satisﬁed
                        </p>
                      </li>
                      <li>
                        <h6>
                          <span>
                            <img
                              width="30"
                              src={shopingicon}
                              alt="shopingicon"
                            />
                          </span>
                          PUBLISH &amp; SELL ON THE MARKETPLACE
                        </h6>
                        <p>
                          You can save your bot and publish it on our data
                          marketplace where anyone can see, buy, and use it
                          (edit it too if you wish) for free or at the price you
                          set. <Link to="#0">Ready to make good money?</Link>
                        </p>
                      </li>
                    </ul>
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
                      <ReactTooltip />
                      <ReactTooltip />
                      <ReactTooltip />
                    </li>
                    <li>
                      <span data-tip="After clicking, it opens the 'Search Results Page Filter' tab to set the item ﬁlters if any (e.g. sidebar area).">
                        <Link to="#0">
                          <img width="15" src={filtterIcon} alt="filtterIcon" />
                          Search Results Page Filter Setting
                        </Link>
                      </span>
                      <ReactTooltip />
                    </li>
                    <li>
                      <span data-tip="After setting all search terms and ﬁlters (if any) click this to open 'Record's Path Setting' tab and tell where to take the data.">
                        <Link to="#0">
                          <img width="20" src={recordIcon} alt="recordIcon" />
                          Item/Record Setting
                        </Link>
                      </span>
                      <ReactTooltip />
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
                      <ReactTooltip />
                      <ReactTooltip />
                      <ReactTooltip />
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

export default DesignerSimpleTestPreview;
