import { useState } from "react";
import DessertsTab from "../helpers/menu/DessertsTab";
import DishesTab from "../helpers/menu/DishesTab";
import DrinksTab from "../helpers/menu/DrinksTab";
import MainTab from "../helpers/menu/MainTab";
import TabInfo from "../helpers/menu/TabInfo";
import { Button } from "@mui/material";

const Menu = () => {
    const [value, setValue] = useState(0)

    const items = {
        "Platos": <DishesTab />,
        "Bebidas": <DrinksTab />,
        "Postres": <DessertsTab />
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getLabels = () => {
        return Object.keys(items)
    }

    return (
        <>

            <MainTab
                value={value}
                tabs={getLabels()}
                handleChange={handleChange}
                ariaLabel={'Menú-NOMBRE-RESTO'}
            >
                {getLabels().map((label, index) => (
                    <div key={`${label}-${index}-key`}>
                        <TabInfo key={`${label}-${index}-key`} value={value} index={index}>
                            {items[label]}
                        </TabInfo>
                    </div>
                )
                )}
            </MainTab>
        </>

    )
}

export default Menu