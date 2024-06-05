/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ChannelService } from "../channel.service";
import { ChannelCreateInput } from "./ChannelCreateInput";
import { Channel } from "./Channel";
import { ChannelFindManyArgs } from "./ChannelFindManyArgs";
import { ChannelWhereUniqueInput } from "./ChannelWhereUniqueInput";
import { ChannelUpdateInput } from "./ChannelUpdateInput";

export class ChannelControllerBase {
  constructor(protected readonly service: ChannelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Channel })
  async createChannel(
    @common.Body() data: ChannelCreateInput
  ): Promise<Channel> {
    return await this.service.createChannel({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        members: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Channel] })
  @ApiNestedQuery(ChannelFindManyArgs)
  async channels(@common.Req() request: Request): Promise<Channel[]> {
    const args = plainToClass(ChannelFindManyArgs, request.query);
    return this.service.channels({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        members: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Channel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async channel(
    @common.Param() params: ChannelWhereUniqueInput
  ): Promise<Channel | null> {
    const result = await this.service.channel({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        members: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Channel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChannel(
    @common.Param() params: ChannelWhereUniqueInput,
    @common.Body() data: ChannelUpdateInput
  ): Promise<Channel | null> {
    try {
      return await this.service.updateChannel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          members: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Channel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChannel(
    @common.Param() params: ChannelWhereUniqueInput
  ): Promise<Channel | null> {
    try {
      return await this.service.deleteChannel({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          members: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
