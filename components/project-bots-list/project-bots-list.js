import "../App.css";
import "../component/project-bots-list.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHeader from "../component/InnerHeader";
import TopSearch from "../component/top-serarch";
import {
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import Breadcrumbs from "../component/breadcrumbs";
import ReactTooltip from "react-tooltip";
import Img1 from "../images/img1.svg";
import icon27 from "../images/icon27.svg";
import icon28 from "../images/icon28.svg";
import icon29 from "../images/icon29.svg";
import icon30 from "../images/icon30.svg";

function ProjectList(props) {
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  return (
    <>
      <InnerHeader />

      <section className="project-list cat-bot-list">
        <Breadcrumbs />
        <TopSearch />
        <div className="project-items">
          <div className="table_responsive">
            <Table borderless style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name/ID</th>
                  <th>Description</th>
                  <th>Statistics</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="160">
                    <div className="left_content">
                      <div className="left_content-inner">
                        <h6>
                          <Link to="/single-bot-datasets">
                            Walmart Smart TVs
                          </Link>
                        </h6>
                        <span>ID# 0000047</span>
                      </div>
                    </div>
                  </td>
                  <td width="580">
                    <div className="item_info">
                      <p>
                        Here, you can read the description of your extraction
                        bot/scraper. It can consist of a short sentence or a few
                        paragraphs that help you identify the objective, data
                        source, type of records and elements to extract.
                      </p>
                      <Link
                        to="/single-bot-datasets"
                        data-tip="Click here or on the title to see the list of bots and datasets"
                      >
                        Bot/scraper details/data sets
                      </Link>
                      <ReactTooltip />
                    </div>
                  </td>
                  <td>
                    <img
                      onClick={toggle1}
                      data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month."
                      src={Img1}
                      alt="Img"
                    />
                    <ReactTooltip />
                  </td>
                  <td>
                    <div className="action_group">
                      <Link to="/designer-simple-filters">
                        <img src={icon27} alt="icon27" />
                      </Link>
                      <Link data-tip="Duplicate" to="/#0">
                        <img src={icon30} alt="icon30" />
                        <ReactTooltip />
                      </Link>
                      <Link to="#0">
                        <img src={icon28} alt="icon28" />
                      </Link>
                      <span className="hover_tool">
                        <img src={icon29} alt="icon29" />
                        <div className="action_option">
                          <span>Export all data sets</span>
                          <span>Export latest data set</span>
                          <span>Export bot/scraper only</span>
                          <ReactTooltip />
                          <ReactTooltip />
                        </div>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="160">
                    <div className="left_content">
                      <div className="left_content-inner">
                        <h6>Walmart Smart TVs</h6>
                        <span>ID# 0000047</span>
                      </div>
                    </div>
                  </td>
                  <td width="580">
                    <div className="item_info">
                      <p>
                        Here, you can read the description of your extraction
                        bot/scraper. It can consist of a short sentence or a few
                        paragraphs that help you identify the objective, data
                        source, type of records and elements to extract.
                      </p>
                      <Link
                        to="#0"
                        data-tip="Click here or on the title to see the list of bots and datasets"
                      >
                        Bot/scraper details/data sets
                      </Link>
                      <ReactTooltip />
                    </div>
                  </td>
                  <td>
                    <img
                      data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month."
                      src={Img1}
                      alt="Img"
                    />
                    <ReactTooltip />
                  </td>
                  <td>
                    <div className="action_group">
                      <Link to="#0">
                        <img src={icon27} alt="icon27" />
                      </Link>
                      <Link data-tip="Duplicate" to="#0">
                        <img src={icon30} alt="icon30" />
                        <ReactTooltip />
                      </Link>
                      <Link to="#0">
                        <img src={icon28} alt="icon28" />
                      </Link>
                      <span className="hover_tool">
                        <img src={icon29} alt="icon29" />
                        <div className="action_option">
                          <span>Export all data sets</span>
                          <span>Export latest data set</span>
                          <span>Export bot/scraper only</span>
                          <ReactTooltip />
                          <ReactTooltip />
                        </div>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="160">
                    <div className="left_content">
                      <div className="left_content-inner">
                        <h6>Walmart Smart TVs</h6>
                        <span>ID# 0000047</span>
                      </div>
                    </div>
                  </td>
                  <td width="580">
                    <div className="item_info">
                      <p>
                        Here, you can read the description of your extraction
                        bot/scraper. It can consist of a short sentence or a few
                        paragraphs that help you identify the objective, data
                        source, type of records and elements to extract.
                      </p>
                      <Link
                        to="#0"
                        data-tip="Click here or on the title to see the list of bots and datasets"
                      >
                        Bot/scraper details/data sets
                      </Link>
                      <ReactTooltip />
                    </div>
                  </td>
                  <td>
                    <img
                      data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month."
                      src={Img1}
                      alt="Img"
                    />
                    <ReactTooltip />
                  </td>
                  <td>
                    <div className="action_group">
                      <Link to="#0">
                        <img src={icon27} alt="icon27" />
                      </Link>
                      <Link data-tip="Duplicate" to="#0">
                        <img src={icon30} alt="icon30" />
                        <ReactTooltip />
                      </Link>
                      <Link to="#0">
                        <img src={icon28} alt="icon28" />
                      </Link>
                      <span className="hover_tool">
                        <img src={icon29} alt="icon29" />
                        <div className="action_option">
                          <span>Export all data sets</span>
                          <span>Export latest data set</span>
                          <span>Export bot/scraper only</span>
                          <ReactTooltip />
                          <ReactTooltip />
                        </div>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="pagination-block">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  <span data-tip="First page">&laquo;</span> Previous
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  4
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  5
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next <span data-tip="Last page">&raquo;</span>
                </a>
              </li>
            </ul>
            <ReactTooltip />
            <ReactTooltip />
          </nav>
        </div>
      </section>

      <Modal
        isOpen={modal1}
        toggle={toggle1}
        className="modalWrap project_static"
      >
        <ModalHeader>
          <span className="modalTitle">Bot/Scraper Statistics</span>
          <span className="closeButton" onClick={toggle1}></span>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyContent">
            <div className="modalBodyTop">
              <h6>Walmart Smart TVs</h6>
              <span>ID# 0000047</span>
            </div>
            <div className="modalBottomContent">
              <Row>
                <Col sm="4">
                  <div className="card_block">
                    <div className="card_block_header">
                      <h5>Creation date</h5>
                    </div>
                    <div className="card_block_body">
                      <span>
                        07 August,
                        <br />
                        2021
                      </span>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="card_block">
                    <div className="card_block_header">
                      <h5>Latest edit</h5>
                    </div>
                    <div className="card_block_body">
                      <span>
                        03 October,
                        <br />
                        2021
                      </span>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="card_block">
                    <div className="card_block_header">
                      <h5>Latest data set</h5>
                    </div>
                    <div className="card_block_body">
                      <span>
                        28 October,
                        <br />
                        2021
                      </span>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="card_block">
                    <div className="card_block_header">
                      <h5>Nr. data sets created</h5>
                    </div>
                    <div className="card_block_body">
                      <span>50</span>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="card_block">
                    <div className="card_block_header">
                      <h5>Tot. records extracted</h5>
                    </div>
                    <div className="card_block_body">
                      <span>450,000</span>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="card_block">
                    <div className="card_block_header">
                      <h5>
                        Nr. records<span>(current month)</span>
                      </h5>
                    </div>
                    <div className="card_block_body">
                      <span>35,900</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="btn_block">
              <a href="#0" onClick={toggle1}>
                Close
              </a>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
export default ProjectList;
