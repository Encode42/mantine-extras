import React, { cloneElement, ReactElement } from "react";
import { ActionIcon, ActionIconProps, Anchor, AnchorProps, useMantineTheme } from "@mantine/core";
import { TablerIconProps } from "@tabler/icons";
import deepmerge from "deepmerge";

/**
 * Options for the {@link Social} component.
 */
export interface SocialProps extends AnchorProps<"a"> {
    /**
     * Icon to display.
     *
     * Intended for use with {@see https://github.com/tabler/tabler-icons Tabler Icons}.
     */
    "icon": ReactElement,

    /**
     * Properties for the {@link icon}.
     */
    "iconProps"?: TablerIconProps,

    /**
     * Properties for the {@link https://mantine.dev/core/action-icon ActionIcon}.
     */
    "actionIconProps"?: ActionIconProps<"button">,
}

/**
 * A button to link to social media.
 */
export function Social({ icon, iconProps, actionIconProps, href, target = "_blank", ...other}: SocialProps) {
    const theme = useMantineTheme();

    iconProps = deepmerge({
        "size": "unset",
        "color": theme.colors.gray[1],
        "stroke": 1.5
    }, iconProps);

    actionIconProps = deepmerge({
        "sx": {
            "svg:hover": {
                "stroke": `${theme.colors.gray[4]} !important`
            }
        },
        "size": "xl",
        "radius": "xl",
        "variant": "hover"
    }, actionIconProps);

    const themeIcon = cloneElement(icon, iconProps);

    const button = (
        <ActionIcon {...actionIconProps}>
            {themeIcon}
        </ActionIcon>
    );

    return (
        href ? (
            <Anchor href={href} target={target} {...other}>
                {button}
            </Anchor>
        ) : button
    );
}
