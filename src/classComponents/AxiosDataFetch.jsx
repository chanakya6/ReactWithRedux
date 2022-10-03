import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
// import SingleRecord from './SingleRecord';
import { Navigate } from "react-router-dom";

class AxiosDataFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      postsData: [],
    };
  }

  handleAllRecords = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      this.setState({ list: response.data });
    });
  };
  handlePostMethod = () => {
    // let dataObj =
    let dataObj = [
      {
        title: "Modern React With Redux",
        author: "Stephen Grider",
      },
      {
        title: "Modern React With Zustand",
        author: "E.Scott Fitzedger",
      },
    ];
    dataObj.map((value) =>
      axios.post(`http://localhost:3001/posts`, value).then((response) => {
        if (response.status === 201) {
          this.handleFetchPostData();
        } else {
          alert("Record Not Added");
        }
      })
    );
  };

  handleFetchPostData = () => {
    axios
      .get(`http://localhost:3001/posts`)
      .then((response) => this.setState({ postsData: response.data }));
  };
  handleUpdateMethod = () => {
    let author = { author: "Chanakya" };

    axios.put(`http://localhost:3001/posts/4`, author).then((response) => {
      if (response.status === 200) {
        this.handleFetchPostData();
      } else {
        alert("update not happened.....");
      }
    });
  };
  handleDeleteRecord = () => {
    try {
      axios.delete(`http://localhost:3001/posts/4`).then((response) => {
        // console.log(response);
        if (response.status === 200) {
          this.handleFetchPostData();
        } else {
          alert("delete not happened.....");
        }
      });
    } catch (error) {
      console.error(error);
      alert("delete not happened.....");
    }
  };
  componentDidMount() {
    this.handleAllRecords();
    this.handleFetchPostData();
  }

  handleRecords = (event) => {
    let switchRecords;

    switch (event.target.name) {
      case "twoRecords":
        switchRecords = 2;
        break;
      case "threeRecords":
        switchRecords = 3;
        break;
      case "fourRecords":
        switchRecords = 4;
        break;
      case "fiveRecords":
        switchRecords = 5;
        break;
      case "allRecords":
        this.handleAllRecords();
        break;
      default:
        break;
    }

    axios
      .get(`https://jsonplaceholder.typicode.com/users`, {
        params: {
          _limit: switchRecords,
        },
      })
      .then((response) => {
        this.setState({ list: response.data });
      });
  };
  render() {
    return (
      <div>
        <table style={{ border: "2px solid  black" }}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>City</td>
              <td>Suite</td>
              <td>Zipcode</td>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((listValue) => (
              <tr
                key={listValue.id}
                onClick={() => (
                  <Navigate to={`/axiosData/${listValue.id}`} replace={true} />
                )}
              >
                <td>{listValue.name}</td>
                <td>{listValue.username}</td>
                <td>{listValue.email}</td>
                <td>{listValue.address.city}</td>
                <td>{listValue.address.suite}</td>
                <td>{listValue.address.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button name="twoRecords" onClick={this.handleRecords}>
          Limit 2 Records
        </Button>
        <Button name="threeRecords" onClick={this.handleRecords}>
          Limit 3 Records
        </Button>
        <Button name="fourRecords" onClick={this.handleRecords}>
          Limit 4 Records
        </Button>
        <Button name="fiveRecords" onClick={this.handleRecords}>
          Limit 5 Records
        </Button>
        <Button name="allRecords" onClick={this.handleRecords}>
          All Records
        </Button>

        <br />
        <br />
        <table style={{ border: "2px solid  black" }}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Author</td>
            </tr>
          </thead>
          <tbody>
            {this.state.postsData.map((postData) => (
              <tr key={postData.id}>
                <td>{postData.title}</td>
                <td>{postData.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button name="addRecords" onClick={this.handlePostMethod}>
          Add New Record
        </Button>
        <Button name="updateRecord" onClick={this.handleUpdateMethod}>
          Update Author
        </Button>
        <Button name="deleteRecord" onClick={this.handleDeleteRecord}>
          Delete Record
        </Button>
      </div>
    );
  }
}

export default AxiosDataFetch;
