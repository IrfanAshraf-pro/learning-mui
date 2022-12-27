import { Favorite } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";

const MUITabs = () => {
  const [value, setvalue] = useState("1");
  const handleChange = (e, newValue) => {
    setvalue(newValue);
  };
  return (
    <Box sx={{ width: "500px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="Tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              icon={<Favorite />}
              iconPosition="start"
              label="Tab One"
              value="1"
            />
            <Tab label="Tab Two" value="2" disabled />
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab label="Tab Six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
        <TabPanel value="6">Item Six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MUITabs;
