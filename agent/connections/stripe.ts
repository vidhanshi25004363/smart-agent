import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.stripe.com",
  description: "Payment processing and financial infrastructure tools",
  auth: connect("mcp.stripe.com/prj_EkRABLT30UdmpoW4uaqyvB6W6jNc"),
});
