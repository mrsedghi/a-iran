"use client";

import { Container, Typography, Box, Button } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #F0F9F9 0%, #E8F7F7 100%)",
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <Icon
              icon="ph:flower-lotus-duotone"
              width={100}
              height={100}
              color="#00c7ca"
              style={{
                marginBottom: "-20px",
              }}
            />

            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                color: "primary.main",
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              ای ایران
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "text.secondary",
              maxWidth: "600px",
              lineHeight: 1.8,
            }}
          >
            برند "ای ایران"، ارائه‌دهنده پوشاک زنانه لوکس با الهام از نقوش و
            الگوهای اصیل ایرانی و مد مدرن. لباس‌های دوخته شده با کیفیت عالی و
            طراحی منحصر به فرد.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              مشاهده محصولات
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                  borderColor: "primary.dark",
                  backgroundColor: "primary.light",
                  color: "white",
                },
              }}
            >
              درباره ما
            </Button>
          </Box>

          <Box
            sx={{
              mt: 6,
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Icon
                icon="fluent-color:design-ideas-16"
                width={40}
                height={40}
                color="#008B8B"
              />
              <Typography variant="body2" color="text.secondary">
                طراحی اصیل
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Icon
                icon="solar:high-quality-bold-duotone"
                width={40}
                height={40}
                color="#D4AF37"
              />
              <Typography variant="body2" color="text.secondary">
                کیفیت عالی
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Icon
                icon="fluent-emoji-flat:thread"
                width={40}
                height={40}
                color="#00c7ca"
              />
              <Typography variant="body2" color="text.secondary">
                دوخت سفارشی
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
