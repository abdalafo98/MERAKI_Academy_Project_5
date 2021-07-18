import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
import Stars from "./Stars";
import { createTodo, setTodos } from "./../../reducers/review";
import { FaStar } from "react-icons/fa";
import Payment from "../payment/PaymentForm";

import "./doctordetails.css";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const DoctorDetails = ({ setPaymentId, setPaymentReceiver, setPrice }) => {
  const { id } = useParams();
  const history = useHistory();

  const [result, setResult] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [allComment, setAllComment] = useState([]);
  const [sa, setSa] = useState(false);
  const [updateComment, setUpdateComment] = useState(false);
  const [updateText, setUpdateCommentText] = useState("");
  const [avgRating, setAvgRating] = useState(0);

  const token = localStorage.getItem("token");
  const commenter_id = localStorage.getItem("user_id");
  const role_id = localStorage.getItem("role_id");

  let doctorsService_id = parseInt(id);
  setPaymentId(doctorsService_id);
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      review: state.review.review,
    };
  });
  const handleClick = (value) => {
    setRating(value);
  };
  const handleMouseOver = (newHoverValue) => {
    setHover(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHover(undefined);
  };
  useEffect(() => {
    axios
      .get(`/doctor/${id}`)
      .then((result) => {
        console.log("dooooooooooooooooooooooctor", result.data[0]);
        setResult(result.data[0]);
        setPaymentReceiver(result.data[0].user_id);
        setPrice(result.data[0].price);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    axios
      .get(`/doctor/review/${id}`)
      .then((result) => {
        setAllComment(result.data);
      })
      .catch((err) => {});
  }, [sa]);
  useEffect(() => {
    axios
      .get(`/review/${id}`)
      .then((res) => {
        setAvgRating(Math.floor(res.data[0].AverageRating));
      })
      .catch((err) => {});
  }, [sa]);

  const createComment = () => {
    axios
      .post(
        `/doctor/review`,
        {
          comment,
          rating,
          doctorsService_id,
        },

        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        dispatch(createTodo(result.data));
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {
        setSa(true);
      });
  };

  const updateComments = (id) => {
    axios
      .put(
        `/doctor/review/${id}`,
        {
          updateText,
        },

        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        setUpdateComment(false);
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {});
  };

  const deleteComment = (id) => {
    axios
      .delete(`/review/${id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="doctor">
      <link
        href="http://fonts.googleapis.com/css?family=Cookie"
        rel="stylesheet"
        type="text/css"
      ></link>
      <div className="parent">
        <div className="img111">
          <img
            style={{ width: "350px", height: "100%" }}
            src={result.img ? result.img : <></>}
          />
        </div>
        <div className="decs-do">
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            <span>Dr</span> {result.firstName} {result.lastName}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "-6% 0px 10% -19%",
            }}
          >
            <Stars stars={avgRating} defaultValue={avgRating} />
          </div>
          <p
            style={{
              color: "#2e2e2e",
              fontWeight: "700",
              fontFamily: "font-family: Palatino, Georgia, serif",
            }}
          >
            {result.price} ${" "}
            <span
              style={{
                color: "#568c40",
              }}
            >
              Per Month
            </span>{" "}
          </p>

          <p style={{ color: "#2e2e2e", fontWeight: "400" }}>
            {result.Qualifications}{" "}
          </p>

          <p style={{ color: "#2e2e2e", fontWeight: "400" }}>
            {result.practicalExperiences}{" "}
          </p>
          <p style={{ color: "#2e2e2e", fontWeight: "400" }}>
            {result.description}
          </p>
        </div>
        {token ? (
          <>
            {role_id == 2 ? (
              ""
            ) : (
              <button
                style={{
                  marginBottom: "20%",
                  marginLeft: "20%",
                  marginLeft: "10%",
                }}
                className="btn-1"
                onClick={() => {
                  history.push("/payment");
                }}
              >
                Subscribe
              </button>
            )}
          </>
        ) : (
          ""
        )}
      </div>

      {token ? (
        <>
          {role_id == 2 ? (
            ""
          ) : (
            <div className="comment">
              <div className="rating1" style={styles.container}>
                {[...Array(5)].map((element, i) => {
                  let ratingValue = i;
                  return (
                    <div className="rating">
                      <div>
                        <FaStar
                          style={styles.container}
                          key={ratingValue}
                          size={24}
                          onClick={() => handleClick(ratingValue + 1)}
                          onMouseOver={() => handleMouseOver(ratingValue + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={
                            (rating || hover) > ratingValue
                              ? colors.oarange
                              : colors.grey
                          }
                          style={{
                            fontSize: 50,
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <textarea
                  className="input-coment1"
                  placeholder="  Comment Here ...."
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="rating"></div>
              <button className="btnCommant" onClick={createComment}>
              {" "}
              comment
            </button>
            </div>
          )}
        </>
      ) : (
        ""
      )}
        
      <div>
        <div className="parent-commint">
          <p className="Reviews">Reviews :</p>
          {allComment.map((element, index) => {
            return (
              <div className="parent-cmt"> 
              <div className="cmt" key={index + 1}>
              <div className="cmt-child">
                <div className="userImg">
                  <img
                
                    src={element.img}
                  
                  />
                </div>

                  <div className="commenter-details">
                    <p style={{fontWeight:"bold" ,fontSize:"15px"}}>
                      {element.firstName} {element.lastName}
                    </p>
                    <div className="commentRating">
                      <Stars
                        stars={element.rating}
                        defaultValue={element.rating}
                      />
                    </div>

                    {updateComment == false ? (
                      <p style={{ marginTop:"7%" }} className="comments">{element.comment}</p>
                    ) : (
                      <div>
                        {element.commenter_id == commenter_id ? (
                          <>
                            <textarea
                              className="input-text"
                              onChange={(e) => {
                                setUpdateCommentText(e.target.value);
                              }}
                              defaultValue={element.comment}
                            ></textarea>
                            <img
                              onClick={() => {
                                updateComments(element.id);
                              }}
                              style={{ width: "30px", height: "30px" ,cursor:"pointer" }}
                              src="https://img.icons8.com/wired/50/000000/edit.png"
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                  <div className="update_delete ">
                    {element.commenter_id == commenter_id ? (
                      <div className="upd-delete">
                        <img
                          onClick={() => {
                            deleteComment(element.id);
                          }}
                          style={{ width: "30px", height: "30px" ,cursor:"pointer" }}
                          src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png"
                        />

                        {updateComment == false ? (
                          <img
                            onClick={() => {
                              setUpdateComment(true);
                            }}
                            style={{ width: "30px", height: "30px" ,cursor:"pointer" }}
                            src="https://img.icons8.com/wired/50/000000/edit.png"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                
              </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginLeft:"15px"
  },
};
export default DoctorDetails;
