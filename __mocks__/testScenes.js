export const testScenes = [
  {
    groups: [
      {
        columns: [
          {
            keys: [
              "view_4"
            ],
            width: 100
          }
        ]
      }
    ],
    _id: "61e8666b010a37023e3d99a5",
    name: "Home",
    slug: "home",
    key: "scene_1",
    views: [
      {
        columns: [],
        links: [
          {
            name: "Products",
            type: "scene",
            scene: "products"
          },
          {
            name: "Orders",
            type: "scene",
            scene: "orders"
          }
        ],
        inputs: [],
        _id: "61e86a5d1137bc002545ff11",
        groups: [],
        format: "none",
        label: "Menu",
        name: "Menu",
        type: "menu",
        title: "",
        description: "",
        source: {
          criteria: {
            match: "all",
            rules: [],
            groups: []
          },
          limit: "",
          sort: [],
          type: "database"
        },
        key: "view_4"
      },
      {
        columns: [],
        links: [
          {
            name: "Products",
            type: "scene",
            scene: "products"
          },
          {
            name: "Orders",
            type: "scene",
            scene: "orders"
          }
        ],
        inputs: [],
        _id: "61e86a5d1137bc002545ff11",
        groups: [],
        format: "none",
        label: "Menu",
        name: "Menu",
        type: "menu",
        title: "",
        description: "",
        source: {
          criteria: {
            match: "all",
            rules: [],
            groups: []
          },
          limit: "",
          sort: [],
          type: "database"
        },
        key: "view_4"
      }
    ],
    parent: "home-login"
  },
  {
    groups: [],
    _id: "61e86a411137bc002545ff0d",
    name: "Home Login",
    parent: null,
    object: null,
    type: "authentication",
    views: [
      {
        columns: [],
        links: [],
        inputs: [],
        _id: "61e86a411137bc002545ff0e",
        name: "Login Form",
        title: "Login",
        type: "login",
        description: "Enter your email address and password to login.",
        limit_profile_access: false,
        allowed_profiles: [],
        registration_type: "closed",
        key: "view_3"
      }
    ],
    key: "scene_3",
    slug: "home-login"
  },
  {
    groups: [],
    _id: "61e869e11137bc002545feec",
    name: "Account Settings",
    type: "user",
    limit_profile_access: false,
    allowed_profiles: [],
    views: [
      {
        columns: [],
        links: [],
        inputs: [],
        _id: "61e869e11137bc002545feed",
        name: "Account Settings",
        type: "form",
        source: {
          authenticated_user: true,
          object: "object_2"
        },
        action: "update",
        title: "Account Settings",
        description: "",
        rules: {
          submits: [
            {
              is_default: true,
              reload_show: true,
              message: "Your account settings have been updated.",
              action: "message",
              key: "submit_1"
            }
          ]
        },
        groups: [
          {
            columns: [
              {
                inputs: [
                  {
                    key: "field_7",
                    type: "name",
                    label: "Name",
                    field: {
                      key: "field_7"
                    },
                    id: "field_7"
                  },
                  {
                    key: "field_8",
                    type: "email",
                    label: "Email",
                    field: {
                      key: "field_8"
                    },
                    id: "field_8"
                  }
                ]
              }
            ]
          }
        ],
        key: "view_1"
      },
      {
        columns: [],
        links: [],
        inputs: [],
        _id: "61e869e11137bc002545feee",
        name: "Change Password",
        type: "form",
        source: {
          authenticated_user: true,
          object: "object_2"
        },
        action: "update",
        title: "Change Password",
        description: "",
        rules: {
          submits: [
            {
              is_default: true,
              reload_show: true,
              message: "Password successfully changed.",
              action: "message",
              key: "submit_1"
            }
          ]
        },
        groups: [
          {
            columns: [
              {
                inputs: [
                  {
                    key: "field_9",
                    type: "password",
                    label: "Password",
                    field: {
                      key: "field_9"
                    },
                    action_authenticate: true,
                    label_authenticate: "Current Password",
                    action_update: true,
                    label_update: "New Password",
                    id: "field_9"
                  }
                ]
              }
            ]
          }
        ],
        key: "view_2"
      }
    ],
    key: "scene_2",
    slug: "account-settings"
  },
  {
    groups: [],
    _id: "61e86a5d1137bc002545ff12",
    name: "Products",
    parent: "home",
    views: [
      {
        columns: [
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_1"
            },
            header: "Products Name",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_2"
            },
            header: "Product ID",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_3"
            },
            header: "Image",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_4"
            },
            header: "Description",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_5"
            },
            header: "Price",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_6"
            },
            header: "Available",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "edit",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            header: "Edit Product",
            type: "link",
            scene: "edit-product",
            sortable: false
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "view",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            header: "Product Details",
            type: "link",
            scene: "product-details",
            sortable: false
          }
        ],
        links: [],
        inputs: [],
        _id: "61e86a5d1137bc002545ff13",
        groups: [],
        no_data_text: "No data",
        totals: [],
        preset_filters: [],
        name: "Products",
        type: "table",
        source: {
          criteria: {
            match: "all",
            rules: [],
            groups: []
          },
          limit: null,
          sort: [
            {
              field: "field_1",
              order: "asc"
            }
          ],
          object: "object_1"
        },
        title: "Products",
        description: "",
        rows_per_page: "25",
        keyword_search: true,
        allow_exporting: false,
        allow_preset_filters: false,
        filter_type: "fields",
        menu_filters: [],
        filter_fields: "view",
        key: "view_5"
      }
    ],
    key: "scene_4",
    slug: "products"
  },
  {
    groups: [],
    _id: "61e86a5d1137bc002545ff14",
    name: "Edit Product",
    object: "object_1",
    parent: "products",
    views: [
      {
        columns: [],
        links: [],
        inputs: [],
        _id: "61e86a5d1137bc002545ff15",
        name: "Edit Product",
        type: "form",
        action: "update",
        source: {
          object: "object_1"
        },
        title: "Edit Product",
        description: "",
        alert: "none",
        rules: {
          submits: [
            {
              key: "submit_1",
              action: "message",
              message: "Form successfully submitted.",
              reload_show: true,
              is_default: true
            }
          ]
        },
        groups: [
          {
            columns: [
              {
                inputs: [
                  {
                    field: {
                      key: "field_1"
                    },
                    label: "Products Name",
                    type: "text_field"
                  },
                  {
                    field: {
                      key: "field_3"
                    },
                    label: "Image",
                    type: "upload"
                  },
                  {
                    field: {
                      key: "field_4"
                    },
                    label: "Description",
                    type: "text_area"
                  },
                  {
                    field: {
                      key: "field_5"
                    },
                    label: "Price",
                    type: "text_field"
                  },
                  {
                    field: {
                      key: "field_6"
                    },
                    label: "Available",
                    type: "boolean"
                  }
                ]
              }
            ]
          }
        ],
        key: "view_6"
      }
    ],
    key: "scene_5",
    slug: "edit-product"
  },
  {
    groups: [],
    _id: "61e86a5d1137bc002545ff16",
    name: "Product Details",
    object: "object_1",
    parent: "products",
    views: [
      {
        columns: [
          {
            groups: [
              {
                columns: [
                  [
                    {
                      key: "field_1",
                      name: "Products Name"
                    },
                    {
                      key: "field_2",
                      name: "Product ID"
                    },
                    {
                      key: "field_3",
                      name: "Image"
                    },
                    {
                      key: "field_4",
                      name: "Description"
                    },
                    {
                      key: "field_5",
                      name: "Price"
                    },
                    {
                      key: "field_6",
                      name: "Available"
                    }
                  ]
                ]
              }
            ],
            width: 100
          }
        ],
        links: [],
        inputs: [],
        _id: "61e86a5d1137bc002545ff17",
        name: "Product",
        type: "details",
        source: {
          object: "object_1"
        },
        title: "Product Details",
        description: "",
        layout: "full",
        label_format: "left",
        key: "view_7"
      }
    ],
    key: "scene_6",
    slug: "product-details"
  },
  {
    groups: [],
    _id: "61e86a841137bc002545ff1c",
    name: "Orders",
    parent: "home",
    views: [
      {
        columns: [
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_22"
            },
            header: "Orders Name",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_23"
            },
            header: "Order ID",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_24"
            },
            header: "Status",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_25"
            },
            header: "Description",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_26"
            },
            header: "Total",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            field: {
              key: "field_27"
            },
            header: "Order Date",
            type: "field"
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "edit",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            header: "Edit Order",
            type: "link",
            scene: "edit-order",
            sortable: false
          },
          {
            grouping: false,
            group_sort: "asc",
            ignore_edit: false,
            ignore_summary: false,
            conn_separator: "",
            conn_link: "",
            link_type: "text",
            link_text: "view",
            link_field: "",
            icon: {
              icon: "",
              align: "left"
            },
            img_gallery: "",
            width: {
              type: "default",
              units: "px",
              amount: "50"
            },
            align: "left",
            rules: [],
            header: "Order Details",
            type: "link",
            scene: "order-details",
            sortable: false
          }
        ],
        links: [],
        inputs: [],
        _id: "61e86a841137bc002545ff1d",
        groups: [],
        no_data_text: "No data",
        totals: [],
        preset_filters: [],
        name: "Orders",
        type: "table",
        source: {
          criteria: {
            match: "all",
            rules: [],
            groups: []
          },
          limit: null,
          sort: [
            {
              field: "field_22",
              order: "asc"
            }
          ],
          object: "object_5"
        },
        title: "Orders",
        description: "",
        rows_per_page: "25",
        keyword_search: true,
        allow_exporting: false,
        allow_preset_filters: false,
        filter_type: "fields",
        menu_filters: [],
        filter_fields: "view",
        key: "view_8"
      }
    ],
    key: "scene_7",
    slug: "orders"
  },
  {
    groups: [],
    _id: "61e86a841137bc002545ff1e",
    name: "Edit Order",
    object: "object_5",
    parent: "orders",
    views: [
      {
        columns: [],
        links: [],
        inputs: [],
        _id: "61e86a841137bc002545ff1f",
        name: "Edit Order",
        type: "form",
        action: "update",
        source: {
          object: "object_5"
        },
        title: "Edit Order",
        description: "",
        alert: "none",
        rules: {
          submits: [
            {
              key: "submit_1",
              action: "message",
              message: "Form successfully submitted.",
              reload_show: true,
              is_default: true
            }
          ]
        },
        groups: [
          {
            columns: [
              {
                inputs: [
                  {
                    field: {
                      key: "field_22"
                    },
                    label: "Orders Name",
                    type: "text_field"
                  },
                  {
                    field: {
                      key: "field_24"
                    },
                    label: "Status",
                    type: "combo_box"
                  },
                  {
                    field: {
                      key: "field_25"
                    },
                    label: "Description",
                    type: "text_area"
                  },
                  {
                    field: {
                      key: "field_26"
                    },
                    label: "Total",
                    type: "text_field"
                  },
                  {
                    field: {
                      key: "field_27"
                    },
                    label: "Order Date",
                    type: "text_field"
                  },
                  {
                    field: {
                      key: "field_28"
                    },
                    label: "Ship Date",
                    type: "text_field"
                  },
                  {
                    field: {
                      key: "field_29"
                    },
                    label: "Shipping Address",
                    type: "text_area"
                  }
                ]
              }
            ]
          }
        ],
        key: "view_9"
      }
    ],
    key: "scene_8",
    slug: "edit-order"
  },
  {
    groups: [],
    _id: "61e86a841137bc002545ff20",
    name: "Order Details",
    object: "object_5",
    parent: "orders",
    views: [
      {
        columns: [
          {
            groups: [
              {
                columns: [
                  [
                    {
                      key: "field_22",
                      name: "Orders Name"
                    },
                    {
                      key: "field_23",
                      name: "Order ID"
                    },
                    {
                      key: "field_24",
                      name: "Status"
                    },
                    {
                      key: "field_25",
                      name: "Description"
                    },
                    {
                      key: "field_26",
                      name: "Total"
                    },
                    {
                      key: "field_27",
                      name: "Order Date"
                    },
                    {
                      key: "field_28",
                      name: "Ship Date"
                    }
                  ]
                ]
              }
            ],
            width: 100
          }
        ],
        links: [],
        inputs: [],
        _id: "61e86a841137bc002545ff21",
        name: "Order",
        type: "details",
        source: {
          object: "object_5"
        },
        title: "Order Details",
        description: "",
        layout: "full",
        label_format: "left",
        key: "view_10"
      }
    ],
    key: "scene_9",
    slug: "order-details"
  }
];
