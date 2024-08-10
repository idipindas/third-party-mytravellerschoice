


export const BASE_URL = process.env.PARMAR_URL

// /**
//  * Get Agent Details
//  * @param data - The request body containing the username and password
//  * @returns The agent details
//  */
// export const getAgentDetails = async (data: AgentDetailsRequest): Promise<AgentDetailsResponse> => {
//   try {
//     const response = await axios.post<AgentDetailsResponse>(`${BASE_URL}/getAgentDetails`, data);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to get agent details: ${error.message}`);
//   }
// };
