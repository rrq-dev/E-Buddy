"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Webcam from "react-webcam";

export default function WebcamCard({ webcamRef, onDetect }) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <h2 className="text-xl font-semibold">Webcam Mood Detector</h2>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-full rounded-lg"
        />
        <Button onClick={onDetect}>Deteksi Mood</Button>
      </CardContent>
    </Card>
  );
}
