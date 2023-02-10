export const usage = () => {
  console.log(`
    usage: yarn dupefix [--debug] <input_filename> <output_filename>
      --debug :            Run in debug mode (prints results)
      <input_filename> :   File to be parsed for duplicate processing
      <output_filename> :  File the de-duplicated data will be written to
  `);
  return true;
};

export default usage;
