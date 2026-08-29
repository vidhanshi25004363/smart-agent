import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.onkernel.com/mcp",
  description: "Kernel cloud browsers for AI agents",
  auth: connect("mcp.onkernel.com/prj_EkRABLT30UdmpoW4uaqyvB6W6jNc"),
});
