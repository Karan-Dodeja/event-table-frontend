import React from "react";
import "./Table.style.css";

const Table = () => {
  return (
    <div>
      <table
        className="tableClass"
        style={{
          boxShadow: "15px 20px transparent",
          marginLeft: "auto",
          fontFamily: "Inter",
          marginRight: "auto",
          alignItems: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <thead
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <th
            style={{
              padding: "22px 60px 22px 60px",
              margin: "10px 40px 10px 40px",
            }}
          >
            Event
          </th>
          <th
            style={{
              padding: "22px 60px 22px 60px",
              margin: "10px 40px 10px 40px",
            }}
          >
            Date
          </th>
          <th
            style={{
              padding: "22px 60px 22px 60px",
              margin: "10px 40px 10px 40px",
            }}
          >
            Time
          </th>
          <th
            style={{
              padding: "22px 60px 22px 60px",
              margin: "10px 40px 10px 40px",
            }}
          >
            Location
          </th>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Workshop on Web Development
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              2024-03-15
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              10:00 AM - 2:00 PM
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Tech Hub Room 101
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Art Exhibition - "Expressions of Color"
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              2024-04-05
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              6:00 PM - 8:00 PM
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Art Gallery Hall
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Tech Conference - Future Tech Trends
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              2024-05-20
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              9:00 AM - 5:00 PM
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Convention Center
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Fitness Challenge - 5K Run
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              2024-06-08
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              7:30 AM - 11:00 AM
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              City Park
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Music Festival - Harmony Fest
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              2024-07-15
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              3:00 PM - 10:00 PM
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Outdoor Amphitheater
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Startup Pitch Night
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              2024-08-02
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              6:30 PM - 9:00 PM
            </td>
            <td
              style={{
                padding: "30px 60px 30px 60px",
              }}
            >
              Innovation Hub Auditorium
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
