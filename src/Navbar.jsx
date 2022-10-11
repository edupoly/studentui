import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/addStudent">Add Student</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/allStudents">All Students</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar