const { linkedinAccessToken } = require("@/configs/config");
const { RestliClient } = require("linkedin-api-client");

const restliClient = new RestliClient();

const getDataProfile = () => {
  return restliClient
    .get({
      resourcePath: "/me",
      accessToken: linkedinAccessToken,
    })
    .then((response) => {
      const profile = response.data;
    });
};

export { getDataProfile };
