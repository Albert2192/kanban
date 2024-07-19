<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Tareas;
use Illuminate\Http\Request;

class TareasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $tareas = Tareas::all();
        $tareas = Tareas::orderBy('id', 'desc')->get();
        return response()->json($tareas);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (empty($request->nombre)) {
            return response()->json(["status" => "warning", "message" => "Nombre es obligatorio"]);
        }
        if (empty($request->descripcion)) {
            return response()->json(["status" => "warning", "message" => "Descipción es obligatoria"]);
        }
        if (empty($request->asignado)) {
            return response()->json(["status" => "warning", "message" => "Usuario asignado es obligatorio"]);
        }
        $tareas = new Tareas();
        $tareas->nombre = $request->nombre;
        $tareas->descripcion = $request->descripcion;
        $tareas->asignado = $request->asignado;
        $tareas->save();

        return response()->json([
            "status" => "ok",
            "message" => "Registro Agregado Correctamente !"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $tareas = Tareas::find($id);

        if (!empty($tareas)) {
            return response()->json($tareas);
        } else {
            return response()->json([
                "message" => "El Registro no se encuentra."
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $tareas = Tareas::find($id);

        // $tareas->nombre = $request->nombre;
        // $tareas->descripcion = $request->descripcion;
        // $tareas->asignado = $request->asignado;
        $tareas->estado = $request->estado;
        $tareas->save();

        return response()->json([
            "message" => "Registro Actualizado Correctamente !"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $tareas = Tareas::find($id);
        $tareas->delete();

        return response()->json([
            "message" => "Registro Eliminado Correctamente !"
        ]);
    }
}
