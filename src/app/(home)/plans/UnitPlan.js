import unitPlanImg1 from "@/app/images/unit-plan-map1.webp"
import unitPlanImg2 from "@/app/images/unit-plan-map2.webp"
import unitPlanImg3 from "@/app/images/unit-plan-map3.webp"


const unitPlan = [
    {
        tab: 'Low rise - 3BHK',
        tab_id: '1',
        sizes: [
            {
                size: '2300 sq.ft.',
                type: {
                    type1: {
                        images: unitPlanImg1,
                        Image3D: "",
                        title: "EXCLUSIVE 3BHK",
                        size: '2300 sq.ft.',
                        type: 'Type-1',
                        desc: "Where comfort meets happiness, everyday!",
                        reraCarpetArea: '1317.45 sq.ft.',
                        SuperArea: '2300 sq.ft.',
                    },
                },
            },
        ],
    },
    {
        tab: 'High rise - 3BHK+s',
        tab_id: '2',
        sizes: [
            {
                size: '2800 sq.ft.',
                type: {
                    type1: {
                        images: unitPlanImg2,
                        Image3D: "",
                        title: "EXCLUSIVE 3BHK",
                        size: '2800 sq.ft.',
                        type: 'Type-1',
                        desc: "Where comfort meets happiness, everyday!",
                        reraCarpetArea: '1689.38 Sq.Ft',
                        SuperArea: '2800 sq.ft.',
                    },
                },
            },
        ],
    },
    {
        tab: 'High rise - 4BHK+s',
        tab_id: '3',
        sizes: [
            {
                size: '3400 sq.ft.',
                type: {
                    type1: {
                        images: unitPlanImg3,
                        Image3D: "",
                        title: "EXCLUSIVE 4BHK +s",
                        size: '3400 sq.ft.',
                        type: 'Type-1',
                        desc: "Where comfort meets happiness, everyday!",
                        reraCarpetArea: '2076.29 Sq.Ft',
                        SuperArea: '3400 sq.ft.',
                    },
                },
            },
        ],
    },
];

export default unitPlan;
