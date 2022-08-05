module.exports = {
    mySidebar: [{
        type: "doc",
        id: "intro",
        label: "Introduction",
    },
    {
        type: "category",
        label: "Tutorials",
        items: [
            "user/about",
        ],
    },
    {
        type: "category",
        label: "How Tos",
        items: [
            "user/about",
        ],
    },
    {
        type: "category",
        label: "Concepts",
        items: [
            "bo/index-bo",
            "auth/index-auth",
        ],
    },
    {
        type: 'category',
        label: 'API Specifications',
        // collapsible: true,
        // collapsed: false,
        items: [
            {
                type: "category",
                label: "Users Management",
                items: [
                    "user/about",
                    "user/creation",
                    "user/management",
                    "user/investor",
                    "user/issuer",
                ],
            },
            {
                type: "category",
                label: "Markets Management",
                items: [
                    "market/index-create",
                    "market/creation",
                    "market/management",
                ],
            },
            {
                type: "category",
                label: "Assets Management",
                items: [
                    "asset/about",
                    "asset/management",
                    "asset/collection-management",
                ],
            },
            {
                type: "category",
                label: "Operations Management",
                items: [
                    "operation/about",
                    "operation/management",
                ],
            },
            {
                type: "category",
                label: "Wallet Management",
                items: [
                    "wallet/about",
                    "wallet/management",
                ],
            },
            {
                type: "category",
                label: "Compliance Management",
                items: [
                    "compliance/index-compliance",
                    "compliance/kyc-aml",
                    "compliance/payment-api",
                ],
            },
            {
                type: "category",
                label: "Drop Management",
                items: [
                    "drop/about",
                    "drop/management",
                ],
            },
        ],

    },
    {
        type: "doc",
        label: "Glossary",
        id: "glossary",
    },

    {
        type: "doc",
        id: "faq",
        label: "FAQ",
    },

    {
        type: "doc",
        id: "standards",
        label: "HTTP Standards",
    },
    ],
};
