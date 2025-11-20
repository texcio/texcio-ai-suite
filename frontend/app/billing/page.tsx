"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BillingPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Billing</h1>
        <p className="text-muted-foreground">
          Manage your plan, payment methods, and billing history.
        </p>
      </div>

      {/* Current Plan Section */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Your Current Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-lg">Free Plan</p>
              <p className="text-muted-foreground text-sm">
                Limited access to all features with monthly usage limits.
              </p>
            </div>
            <Button className="bg-black text-white hover:bg-gray-900">
              Upgrade Plan
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Add or update your payment method.
          </p>
          <Button variant="outline" className="w-full md:w-auto">
            + Add Payment Method
          </Button>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left font-medium">Date</th>
                  <th className="p-3 text-left font-medium">Description</th>
                  <th className="p-3 text-left font-medium">Amount</th>
                  <th className="p-3 text-left font-medium">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty state */}
                <tr>
                  <td colSpan={4} className="p-6 text-center text-muted-foreground">
                    No billing history available.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
