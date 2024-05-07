import ScraperCss from "./scraper.module.css";
import React, { useEffect, useState } from "react";
import InnerHeader from "../inner-header/InnerHeader";
import TopSearch from "../top-search/top-serarch";
import Link from "next/link";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  Table,
  ModalBody,
  Button,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import AceEditor from "react-ace";
// import Icon20Hover from "../images/icon20-hover.svg";
// import uplaodIcon from "../images/Upload-Icon.svg";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
const schema = yup.object().shape({
  name: yup
    .string()
    .required("New Script Name is required")
    .min(5, "New Script Name must be at least 5 characters"),
  description: yup
    .string()
    .required("New Script Description is required")
    .min(5, "New Script Description must be at least 5 characters"),
  code: yup
    .string()
    .required("New Script Code is required")
    .min(5, "New Script Job must be at least 5 characters"),
  creationDate: yup
    .date()
    .required("Project creationDate is required")
    .typeError("Invalid date"),
  latestEdit: yup
    .date()
    .required("Project latestEdit is required")
    .typeError("Invalid date"),
});

function Scraper(props) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);
  const [values, setValues] = useState([today, tomorrow]);

  const toggle = () => setModal(!modal);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onChange = (newValue) => {
    setValue("code", newValue);
    console.log("change", newValue);
  };

  const onSubmit = (data) => {
    // console.log("Form data submitted:", data);
    mutation.mutate(data);
  };
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios
        .post("api/job", data)
        .then((response) => {
          Swal.fire("Saved!", "Your item has been Saved.", "success");
          reset();
          router.push("/job-list");
        })
        .catch((error) => {
          Swal.fire("Not Saved!", "Your item has not been Saved.", "error");
          console.error("Error:", error);
        });
    },
  });
  useEffect(() => {}, [isSubmitSuccessful]);

  return (
    <>
      <InnerHeader />
      <section className={ScraperCss.newProject}>
        <TopSearch />
        <div className={ScraperCss.project_items}>
          <div className={ScraperCss.table_responsive}>
            <Table borderless style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name/ID/Description</th>
                  <th>Creation date</th>
                  <th>Nr. bots/scrapers</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </Table>
          </div>
          <div className={ScraperCss.newProjectWrap}>
            <h3>
              You are almost done! Now create your ﬁrst extraction project.
            </h3>
            <Form>
              <FormGroup className={ScraperCss.newFile}>
                <Label for="file">
                  <span onClick={toggle}>
                    <span>
                      <img src={"/images/icon20-hover.svg"} alt="Icon18Hover" />
                    </span>
                    <span className={ScraperCss.input_text}>NEW JOB</span>
                  </span>
                </Label>
              </FormGroup>
            </Form>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`modalWrap header-modal`}
      >
        <ModalHeader className="inner-heading">
          <span className={"closeButton"} onClick={toggle}></span>

          <span className="modalTitle">New Job - Creation Panel</span>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyContent">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label>Name:</Label>
                <input
                  className="form-control"
                  placeholder="Write your category name here"
                  type="text"
                  {...register("name")}
                />

                {errors?.name && (
                  <p>
                    <span style={{ color: "red" }}>
                      {errors?.name?.message}
                    </span>
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <Label>New Script Description:</Label>
                {/* <Input
                  placeholder="Write your category name here"
                  type="text"
                /> */}
                <textarea
                  className="form-control"
                  {...register("description")}
                  placeholder="Write your New Script Description here"
                  type="text"
                ></textarea>

                {errors?.description && (
                  <p>
                    <span style={{ color: "red" }}>
                      {errors?.description?.message}
                    </span>
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <Label>New Script Code:</Label>
                <AceEditor
                  mode="javascript"
                  theme="github"
                  onChange={onChange}
                  name="code"
                  editorProps={{
                    $blockScrolling: true,
                  }}
                />
                {errors?.code && (
                  <p>
                    <span style={{ color: "red" }}>
                      {errors?.code?.message}
                    </span>
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <Label>
                  Schedule start and end date:
                  <span>(only start date for one-time extraction)</span>
                </Label>
                <span className="date-picker">
                  <Image
                    width={50}
                    height={50}
                    multiple
                    value={values}
                    onChange={setValues}
                    src={"/images/icon37.svg"}
                    alt="Planner"
                  />
                  <Controller
                    name="creationDate"
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <DatePicker
                        {...rest}
                        // You can add more specific props for Datepicker if needed
                      />
                    )}
                  />
                  {/* <DatePicker {...register("creationDate")} /> */}
                  {errors?.creationDate && (
                    <p>
                      <span style={{ color: "red" }}>
                        {errors?.creationDate?.message}
                      </span>
                    </p>
                  )}
                  <Controller
                    name="latestEdit"
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <DatePicker
                        {...rest}
                        // You can add more specific props for Datepicker if needed
                      />
                    )}
                  />
                  {errors?.latestEdit && (
                    <p>
                      <span style={{ color: "red" }}>
                        {errors?.latestEdit?.message}
                      </span>
                    </p>
                  )}
                </span>
              </FormGroup>
              {/* <FormGroup>
                <Label>Description:</Label>
                <Input
                  placeholder="Write a brief description of your category here"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label>Upload image:</Label>
                <span className="uploadIcon">
                  <Input type="file" />
                  <img src={"/images/Upload-Icon.svg"} alt="Upload" />
                </span>
              </FormGroup> */}
              <div className="btn_block">
                <Button
                  color="danger"
                  style={{ marginRight: "10px" }}
                  onClick={toggle}
                >
                  CANCEL
                </Button>
                {/* <Link href="/categories-list" className="style_two"> */}
                <Button type="submit" className="btn-color">
                  SAVE
                </Button>
                {/* </Link> */}
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default Scraper;
