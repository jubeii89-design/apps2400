import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dice5 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Register = () => (
  <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
      <Card>
        <CardContent className="p-8">
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
              <Dice5 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold">Create Account</h1>
            <p className="text-sm text-muted-foreground">Join the Strategic Titan's community</p>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Full Name" required />
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Password" type="password" required />
            <Input placeholder="Confirm Password" type="password" required />
            <Button className="w-full font-display" size="lg">Create Account</Button>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">Sign In</Link>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

export default Register;
