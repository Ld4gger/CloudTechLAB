import { height } from "@mui/system";
import AuthForm from "../module/components/containers/AuthForm";
import DashboardLayout from "../module/components/containers/DashboardLayout";

export function App() {
    return <div style={{
      display: 'flex',
      justifyContent: "space-between",
      flexDirection: 'column',
      height: '100vh'
    }}>
      <DashboardLayout>
        <AuthForm/>
      </DashboardLayout>
    </div>;
  }