export interface AgentDetailsRequest {
    userName: string;
    userPassword: string;
  }
  
  export interface AgentDetailsResponse {
    // Define the expected response structure based on API documentation
    // Example:
    agentName: string;
    contactNumber: string;
    creditLimit: number;
    availableLimit: number;
    currentBalance: number;
    // Add other fields as necessary
  }