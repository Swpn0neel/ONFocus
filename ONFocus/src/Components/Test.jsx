import { HoverCard, Avatar, Text, Group, Stack } from "@mantine/core";

function Demo({ user, handleLogout }) {
  const imageURL = user.photoURL;

  return (
    <Group>
      <HoverCard
        width={230}
        shadow="md"
        openDelay={200}
        closeDelay={400}
        radius="lg"
      >
        <HoverCard.Target>
          <Avatar
            src={imageURL}
            className="h-12 w-12 rounded-full"
            radius="xl"
          />
        </HoverCard.Target>
        <HoverCard.Dropdown className="mr-10">
          <Avatar src={imageURL} radius="xl" />{" "}
          <Stack spacing={5}>
            <Text size="sm" weight={700} mt="md" sx={{ lineHeight: 1 }}>
              {user.displayName}
            </Text>
            <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }}>
              {user.email}
            </Text>
          </Stack>
          <Text size="sm" mt="md">
            Do you really want to turn off your Focus Mode and get back to your
            stressed & distracted life?
          </Text>
          <Group mt="md" spacing="xl">
            <div className="max-sm:mx-auto max-sm:pb-5">
              <button
                onClick={handleLogout}
                className="bg-[#001F8C] text-white lg:px-5 pb-1 pt-0.5 text-base px-5 rounded-lg"
              >
                Log out
              </button>
            </div>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

export default Demo;
