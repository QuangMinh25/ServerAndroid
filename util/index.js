const response = ({ status, message, errors, data }) => ({
  status: status || 500,
  message: message || "",
  errors: errors || [],
  data: data || null,
});

module.exports = {
  response,
};
