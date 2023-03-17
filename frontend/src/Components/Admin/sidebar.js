import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import logo from "../pages/navebar/logo.png";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <Link to="/">
      <img src={logo} alt="SSTC MARKETPLACE" />
    </Link>
    <Link to="/">
      <p>
        <DashboardIcon /> Home
      </p>
    </Link>
    <Link to="">
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem nodeId="1" label="Products">
          <Link to="/admin/products">
            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
          </Link>

          <Link to="/admin/createProduct">
            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
          </Link>
       </TreeItem>
      </TreeView>
    </Link>
     <Link to="/admin/orders">
      <p>
        <ListAltIcon />
        Analytics
      </p>
    </Link>
    <Link to="/admin/enquiry">
      <p>
        <PeopleIcon /> Enquiry
      </p>
    </Link>
   
  </div>
  );
};

export default Sidebar;