import {
  Button,
  Container,
  Flex,
  Grid,
  Loader,
  Tabs,
  Text,
} from "@mantine/core";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import CustomBreadcrumbs from "../../../components/Breadcrumbs.jsx";
import classes from "../styles/messModule.module.css";

// Import all the components here
//   import ComplaintForm from "./components/ComplaintForm.jsx";

function Student() {
  const [activeTab, setActiveTab] = useState("0");
  const tabsListRef = useRef(null);

  const tabItems = [
    { title: "View FeedBack | Statistics" },
    { title: "Respond to rebate requests" },
    { title: "Reg/Dereg/UpdatePayment Requests" },
    { title: "View Special Food requests" },
    { title: "View Menu" },
    { title: "Mess Activities" },
    { title: "Mess Registrations" },
    { title: "Update Menu" },
    { title: "Update Sem Dates" },
  ];

  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? Math.min(+activeTab + 1, tabItems.length - 1)
        : Math.max(+activeTab - 1, 0);
    setActiveTab(String(newIndex));
    tabsListRef.current.scrollBy({
      left: direction === "next" ? 50 : -50,
      behavior: "smooth",
    });
  };

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <p>View Feedback | Statistics</p>;
      case "1":
        return <p>Respond to rebate requests</p>;
      case "2":
        return <p>Reg/Dereg/UpdatePayment Requests</p>;
      case "3":
        return <p>View Special Food requests</p>;
      case "4":
        return <p>View Menu</p>;
      case "5":
        return <p>Mess Activities</p>;
      case "6":
        return <p>Mess Registrations</p>;
      case "7":
        return <p>Update Menu</p>;
      case "8":
        return <p>Update Sem Dates</p>;
      default:
        return <Loader />;
    }
  };

  return (
    <>
      {/* Navbar contents */}
      <CustomBreadcrumbs />
      <Flex justify="space-between" align="center" mt="lg">
        <Flex justify="flex-start" align="center" gap="1rem" mt="1.5rem">
          <Button
            onClick={() => handleTabChange("prev")}
            variant="default"
            p={0}
            style={{ border: "none" }}
          >
            <CaretCircleLeft
              className={classes.fusionCaretCircleIcon}
              weight="light"
            />
          </Button>

          <div className={classes.fusionTabsContainer} ref={tabsListRef}>
            <Tabs value={activeTab} onChange={setActiveTab}>
              <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
                {tabItems.map((item, index) => (
                  <Tabs.Tab
                    value={`${index}`}
                    key={index}
                    className={
                      activeTab === `${index}`
                        ? classes.fusionActiveRecentTab
                        : ""
                    }
                  >
                    <Flex gap="4px">
                      <Text>{item.title}</Text>
                    </Flex>
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs>
          </div>

          <Button
            onClick={() => handleTabChange("next")}
            variant="default"
            p={0}
            style={{ border: "none" }}
          >
            <CaretCircleRight
              className={classes.fusionCaretCircleIcon}
              weight="light"
            />
          </Button>
        </Flex>
      </Flex>

      {/* Main content */}
      <Grid mt="xl">
        <Container py="xl">{renderTabContent()}</Container>
      </Grid>
    </>
  );
}

export default Student;