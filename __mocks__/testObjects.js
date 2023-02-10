export const testObjects = [
  {
    inflections: {
      singular: "Product",
      plural: "Products"
    },
    connections: {
      inbound: [],
      outbound: []
    },
    user: false,
    status: "current",
    tasks: [],
    type: "StandardObject",
    _id: "61e869d51137bc002545fedc",
    name: "Products",
    fields: [
      {
        type: "short_text",
        required: true,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: "61e869d51137bc002545fede",
        key: "field_1",
        name: "Products Name"
      },
      {
        type: "auto_increment",
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: "61e869d51137bc002545fedf",
        name: "Product ID",
        key: "field_2"
      },
      {
        type: "image",
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: "61e869d51137bc002545fee0",
        name: "Image",
        format: {
          source: "upload",
          thumbs: []
        },
        key: "field_3"
      },
      {
        type: "paragraph_text",
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: "61e869d51137bc002545fee1",
        name: "Description",
        key: "field_4"
      },
      {
        type: "paragraph_text",
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: "61e869d51137bc002545fee2",
        name: "Description",
        key: "field_4"
      },
      {
        type: "currency",
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: "61e869d51137bc002545fee3",
        name: "Price",
        format: {
          format: "$"
        },
        key: "field_5"
      },
      {
        type: "boolean",
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: "61e869d51137bc002545fee4",
        name: "Available",
        format: {
          default: false,
          format: "yes_no",
          input: "dropdown",
          required: false
        },
        default: false,
        key: "field_6"
      }
    ]
  }
];