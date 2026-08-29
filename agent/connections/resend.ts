import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.resend.com",
  description: "Send transactional and marketing email.",
  auth: connect("mcp.resend.com/prj_EkRABLT30UdmpoW4uaqyvB6W6jNc"),
});
