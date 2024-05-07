import JobListCss from "./job-list.module.css";
import React, { useEffect, useState } from "react";
import InnerHeader from "../inner-header/InnerHeader";
import TopSearch from "../top-search/top-serarch";
import { Pagination, Table } from "reactstrap";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import moment from "moment";
import Swal from "sweetalert2";
// import ReactTooltip from "react-tooltip";
import Link from "next/link";
// import icon27 from "../images/icon27.svg";
// import icon28 from "../images/icon28.svg";
// import icon29 from "../images/icon29.svg";
// import icon31 from "../images/icon31.svg";
import Image from "next/image";
import axios from "axios";
import PaginationWork from "../pagination/PaginationWork";

function JobList({ catData }) {
  const [changeCatData, setChangeCatData] = useState(catData);
  const data = changeCatData;
  const dataLimit = 2;
  const [returnPagiantionResponseData, setReturnPagiantionResponseData] =
    useState(catData);

  const getPaginatedData = (data) => {
    console.log(data, "testing");
    setReturnPagiantionResponseData(data);
  };

  const getCatData = () =>
    axios
      .get("/api/job")
      .then((response) => {
        setChangeCatData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  const handleDeleteClick = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      deleteUser(id);
    }
  };

  const deleteUser = (id) => {
    return axios
      .delete(`/api/job`, {
        data: { id: id },
      })
      .then((response) => {
        // Handle success
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        getCatData();
      })
      .catch((error) => {
        // Handle error
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getCatData();
  }, []);

  return (
    <>
      <InnerHeader />

      <section className={JobListCss.project_list}>
        <Breadcrumbs />
        <TopSearch />
        <div className={JobListCss.project_items}>
          <div className={JobListCss.table_responsive}>
            <Table borderless style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name/ID/Description</th>
                  <th>Creation date</th>
                  <th>Nr. bots/scrapers</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {returnPagiantionResponseData !== null &&
                returnPagiantionResponseData?.length
                  ? returnPagiantionResponseData?.map((item, index) => (
                      <tr key={item?.id}>
                        <td>
                          <div className={JobListCss.left_content}>
                            <div className={JobListCss.imgBlock}></div>
                            <div className={JobListCss.item_info}>
                              <h6>
                                <Link href="/job-bots-list">{item?.name}</Link>
                              </h6>
                              <span className={JobListCss.item_id}>
                                ID# {item?.id}
                              </span>
                              <p>{item?.description}</p>
                              <Link
                                href={`job-list/${item?.id}`}
                                data-tip="Click here or on the title to see the list of bots under this category"
                              >
                                JOB details (JOB list)
                              </Link>
                              {/* <ReactTooltip /> */}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="font-20">
                            {moment(item?.creationDate).format("DD MMMM YYYY")}
                          </span>
                        </td>
                        <td>
                          <span className="font-24">3</span>
                        </td>
                        <td>
                          <div className={JobListCss.action_group}>
                            <Link href="/#0">
                              <a>
                                <Image
                                  width={50}
                                  height={50}
                                  src={"/images/icon27.svg"}
                                  alt="icon27"
                                />
                              </a>
                            </Link>
                            <Link
                              href="/#0"
                              data-tip="Export all bots/scrapers (without data sets)"
                            >
                              <a>
                                <Image
                                  width={50}
                                  height={50}
                                  src={"/images/icon29.svg"}
                                  alt="icon29"
                                />
                              </a>
                              {/* <ReactTooltip /> */}
                            </Link>
                            <Link
                              data-tip="Import bots/scrapers (without datasets)"
                              href="/#0"
                            >
                              <a>
                                <Image
                                  width={50}
                                  height={50}
                                  src={"/images/icon31.svg"}
                                  alt="icon31"
                                />
                              </a>
                              {/* <ReactTooltip /> */}
                            </Link>
                            <Link href="/job-list">
                              <a onClick={() => handleDeleteClick(item?.id)}>
                                <Image
                                  width={50}
                                  height={50}
                                  src={"/images/icon28.svg"}
                                  alt="icon28"
                                />
                              </a>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </Table>
          </div>
        </div>

        <PaginationWork
          data={data}
          dataLimit={dataLimit}
          getPaginatedData={getPaginatedData}
        />
      </section>
    </>
  );
}
export default JobList;
