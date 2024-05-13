// import Catbotlistcss from "./categories-bots-list.module.css";
import React from "react";
import InnerHeader from "../inner-header/InnerHeader";
import TopSearch from "../top-search/top-serarch";
import { Table } from "reactstrap";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
// import ReactTooltip from "react-tooltip";
import Link from "next/link";
// import icon27 from "../images/icon27.svg";
// import icon28 from "../images/icon28.svg";
// import icon29 from "../images/icon29.svg";
// import icon30 from "../images/icon30.svg";
import Image from "next/image";

function CategoryBotsList({ singleData }) {
  return (
    <>
      <InnerHeader />

      <section className="project-list cat-bot-list">
        <Breadcrumbs />
        <TopSearch />
        <div className="project-items">
          <div className="table-responsive">
            <Table
              borderless
              style={{
                paddingLeft: "20px",
                paddingRight: "10px",
                width: "100%",
              }}
            >
              <thead>
                <tr>
                  <th>Name/ID</th>
                  <th>Description</th>
                  <th>Project</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="160">
                    <div className="left_content">
                      <div className="left-content-inner">
                        <h6>{singleData?.name}</h6>
                        <span>ID# {singleData?.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{singleData?.job[0]?.description}</span>
                  </td>
                  <td>
                    <span>Not associated</span>
                  </td>
                  <td>
                    <div className="action_group category-board">
                      <Link href="/#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon27.svg"}
                          alt="icon27"
                        />
                      </Link>
                      <Link data-tip="Duplicate" href="#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon30.svg"}
                          alt="icon30"
                        />
                        {/* <ReactTooltip /> */}
                      </Link>
                      <Link
                        href="/#0"
                        data-tip="Export bot/scraper without data sets"
                      >
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon29.svg"}
                          alt="icon29"
                        />
                        {/* <ReactTooltip /> */}
                      </Link>
                      <Link href="/#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon28.svg"}
                          alt="icon28"
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
                {/* <tr>
                  <td width="160">
                    <div className="left_content">
                      <div className="left-content-inner">
                        <h6>KCOM Colourpage</h6>
                        <span>ID# 0000033</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>
                      Here, you can read the description of your extraction
                      bot/scraper. It can consist of a short sentence or a few
                      paragraphs that help you identify the objective, data
                      source, type of records and elements to extract.
                    </span>
                  </td>
                  <td>
                    <span>Not associated</span>
                  </td>
                  <td>
                    <div className="action_group">
                      <Link href="/#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon27.svg"}
                          alt="icon27"
                        />
                      </Link>
                      <Link data-tip="Duplicate" href="#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon30.svg"}
                          alt="icon30"
                        />
                      </Link>
                      <Link
                        href="/#0"
                        data-tip="Export bot/scraper without data sets"
                      >
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon29.svg"}
                          alt="icon29"
                        />
                      </Link>
                      <Link href="/#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon28.svg"}
                          alt="icon28"
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="160">
                    <div className="left_content">
                      <div className="left-content-inner">
                        <h6>KCOM Colourpage</h6>
                        <span>ID# 0000033</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>
                      Here, you can read the description of your extraction
                      bot/scraper. It can consist of a short sentence or a few
                      paragraphs that help you identify the objective, data
                      source, type of records and elements to extract.
                    </span>
                  </td>
                  <td>
                    <span>Not associated</span>
                  </td>
                  <td>
                    <div className="action_group">
                      <Link href="/#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon27.svg"}
                          alt="icon27"
                        />
                      </Link>
                      <Link data-tip="Duplicate" href="#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon30.svg"}
                          alt="icon30"
                        />
                      </Link>
                      <Link
                        href="/#0"
                        data-tip="Export bot/scraper without data sets"
                      >
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon29.svg"}
                          alt="icon29"
                        />
                      </Link>
                      <Link href="/#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon28.svg"}
                          alt="icon28"
                        />
                      </Link>
                    </div>
                  </td>
                </tr> */}
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
            {/* <ReactTooltip /> */}
            {/* <ReactTooltip /> */}
          </nav>
        </div>
      </section>
    </>
  );
}
export default CategoryBotsList;
