"use client"
import React from "react";
import { BsFillBookmarkCheckFill, BsFillClipboardXFill } from 'react-icons/bs';


function Table() {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">TODO</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Todo1</td>
            <td>Pending</td>
            <td>
                <button className="btn btn-danger"><BsFillClipboardXFill /></button>
                &nbsp;
                <button className="btn btn-success"><BsFillBookmarkCheckFill /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
