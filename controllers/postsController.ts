import express from 'express';

export interface Post {
    id: number,
    info: string,
    id_user: number
}